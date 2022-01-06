import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { platformDetails, platformsGameList } from "../../services/api";
import { getPlatforms } from "../../services/utils";
import axios from "axios";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { GiGamepadCross } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import parse from "html-react-parser";
import Loading from "../Loading";
import Footer from "../Footer";
import "./style.css";
import {
  PlatformDetailSection,
  PlatformDetailsContainer,
  Title,
  Description,
  GoBackButton,
  PlatformDetailsGames,
  PlatformDetailsItem,
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

const PlatformDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);

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
    axios.get(platformDetails(id)).then((res) => {
      setItems(res.data);
      setLoading(false);
    });

    axios.get(platformsGameList(id)).then((res) => {
      setGames(res.data.results);
      setLoading(false);
    });

    window.addEventListener("scroll", scrollToTop);
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {items && (
        <>
          <PlatformDetailSection
            style={{
              background: `url(${getPlatforms(items.name)})`,
            }}
          >
            <PlatformDetailsContainer>
              <Title>{items.name}</Title>
              <Description>
                {typeof items.description === "string" &&
                  parse(items.description)}
              </Description>
              <GoBackButton onClick={goBackHandler}>
                <BiArrowBack />
                Go Back
              </GoBackButton>
            </PlatformDetailsContainer>

            <PlatformDetailsGames>
              <PlatformDetailsItem>
                <Subtitle>{items.name} Games</Subtitle>
                <ButtonContainer>
                  <BsFillArrowLeftCircleFill onClick={sliderRef?.slickPrev} />
                  <BsFillArrowRightCircleFill onClick={sliderRef?.slickNext} />
                </ButtonContainer>
              </PlatformDetailsItem>

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
                            className={`score ${criticScore(game.metacritic)}`}
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
            </PlatformDetailsGames>
            <ScrollToTop visible={visible}>
              <ScrollToTopButton onClick={toTop}>
                <GiGamepadCross />
              </ScrollToTopButton>
            </ScrollToTop>
          </PlatformDetailSection>
          <Footer />
        </>
      )}
    </>
  );
};

export default PlatformDetails;
