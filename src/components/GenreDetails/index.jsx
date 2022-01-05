import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { genreDetails, genreGameList } from "../../services/api";
import axios from "axios";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { GiGamepadCross } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import parse from "html-react-parser";
import "./style.css";
import Loading from "../Loading";
import {
  GenreDetailsSection,
  GenreDetailsContainer,
  Title,
  Description,
  GoBackButton,
  GenreDetailsGames,
  GenreDetailsItem,
  Subtitle,
  ButtonContainer,
  SliderContent,
  GameCard,
  GameCardImage,
  GameCardInfo,
  GameCardName,
  Score,
  NotAvailableScore,
  ScrollToTop,
  ScrollToTopButton,
} from "./style";

const GenreDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);
  let currentPage = 1;

  const goBackHandler = () => {
    history.goBack();
  };

  const criticScore = (score) => {
    if (score >= 90) {
      return "platinum";
    } else if (score >= 70) {
      return "green";
    } else if (score >= 60) {
      return "yellow";
    } else {
      return "red";
    }
  };

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    focusOnselect: false,
    accessability: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const scrollToTop = () => {
    if (window.scrollY >= 80) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    axios.get(genreDetails(id)).then((res) => {
      setItems(res.data);
      setLoading(false);
    });

    axios
      .get(
        `${genreGameList(id)}&page=${Math.floor(Math.random(currentPage) * 11)}`
      )
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      });

    window.addEventListener("scroll", scrollToTop);
  }, [id, currentPage]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {items && (
        <>
          <>
            <GenreDetailsSection
              style={{
                background: `url(${items.image_background})`,
              }}
            >
              <GenreDetailsContainer>
                <Title>{items.name}</Title>
                <Description>
                  {typeof items.description === "string" &&
                    parse(items.description)}
                </Description>
                <GoBackButton onClick={goBackHandler}>
                  <BiArrowBack />
                  Go Back
                </GoBackButton>
              </GenreDetailsContainer>

              <GenreDetailsGames>
                <GenreDetailsItem>
                  <Subtitle>{items.name} Games</Subtitle>
                  <ButtonContainer>
                    <BsFillArrowLeftCircleFill onClick={sliderRef?.slickPrev} />
                    <BsFillArrowRightCircleFill
                      onClick={sliderRef?.slickNext}
                    />
                  </ButtonContainer>
                </GenreDetailsItem>

                <SliderContent {...sliderSettings} ref={setSliderRef}>
                  {games && games.length > 0 ? (
                    games.map((game) => (
                      <GameCard key={game.id} to={`/games/${game.id}`}>
                        <GameCardImage
                          src={game.background_image}
                          alt={game.name}
                        />
                        <GameCardInfo>
                          <GameCardName>{game.name}</GameCardName>
                          {game.metacritic !== null ? (
                            <Score
                              className={`score ${criticScore(
                                game.metacritic
                              )}`}
                            >
                              {game.metacritic}
                            </Score>
                          ) : (
                            <NotAvailableScore>N/A</NotAvailableScore>
                          )}
                        </GameCardInfo>
                      </GameCard>
                    ))
                  ) : (
                    <Loading />
                  )}
                </SliderContent>
              </GenreDetailsGames>

              <ScrollToTop visible={visible}>
                <ScrollToTopButton onClick={toTop}>
                  <GiGamepadCross />
                </ScrollToTopButton>
              </ScrollToTop>
            </GenreDetailsSection>
          </>
        </>
      )}
    </>
  );
};

export default GenreDetails;
