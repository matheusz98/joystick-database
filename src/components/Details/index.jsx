import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import axios from "axios";
import { gameDetailsUrl, gameScreenshots } from "../../services/api";
import Loading from "../Loading";
import { GiGamepadCross } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import {
  DetailsSection,
  DetailsContent,
  GoBackButton,
  Title,
  Developers,
  DevelopersItems,
  Platforms,
  PlatformsItems,
  DetailsContainer,
  DetailsInfoTitle,
  DetailsInfoContent,
  DetailsInfoItems,
  Subtitle,
  DetailsItem,
  CriticScore,
  Description,
  ScreenshotContainer,
  ScreenshotGallery,
  ScreenshotItem,
  ScreenshotImg,
  WebsiteLink,
  ScrollToTop,
  ScrollToTopButton,
} from "./style";
import "./style.css";

const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const [game, setGame] = useState({});
  const [developers, setDevelopers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

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
    setLoading(true);

    axios.get(gameDetailsUrl(id)).then((res) => {
      setGame(res.data);
      setDevelopers(res.data.developers);
      setGenres(res.data.genres);
      setPlatforms(res.data.platforms);
      setLoading(false);
    });

    axios.get(gameScreenshots(id)).then((res) => {
      setScreenshots(res.data.results);
      setLoading(false);
    });

    window.addEventListener("scroll", scrollToTop);
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {game && (
        <>
          <DetailsSection
            style={{
              background: `url(${game.background_image})`,
            }}
          >
            <DetailsContent>
              <Title>{game.name}</Title>
              <Developers>
                {developers.map((developer) => (
                  <DevelopersItems key={developer.id}>
                    {developer.name}
                  </DevelopersItems>
                ))}
              </Developers>
              <Platforms>
                {platforms.map((platform) => (
                  <PlatformsItems key={platform.platform.id}>
                    {platform.platform.name}
                  </PlatformsItems>
                ))}
              </Platforms>
              <GoBackButton onClick={goBackHandler}>
                <BiArrowBack />
                Go Back
              </GoBackButton>
            </DetailsContent>
            <DetailsContainer>
              <DetailsInfoTitle>About</DetailsInfoTitle>
              <DetailsInfoContent>
                <DetailsInfoItems>
                  <Subtitle>Name: </Subtitle>
                  <DetailsItem>{game.name}</DetailsItem>
                </DetailsInfoItems>
                <DetailsInfoItems>
                  <Subtitle>Release Date: </Subtitle>
                  {game.tba === true ? (
                    <DetailsItem>TBA</DetailsItem>
                  ) : (
                    <DetailsItem>{game.released}</DetailsItem>
                  )}
                </DetailsInfoItems>
                <DetailsInfoItems>
                  <Subtitle>Developed by: </Subtitle>
                  {developers.map((developer) => (
                    <DetailsItem key={developer.id}>
                      {developer.name}
                    </DetailsItem>
                  ))}
                </DetailsInfoItems>
                <DetailsInfoItems>
                  <Subtitle>Genres: </Subtitle>
                  {genres.map((genre) => (
                    <DetailsItem key={genre.id}>{genre.name}</DetailsItem>
                  ))}
                </DetailsInfoItems>
                <DetailsInfoItems>
                  <Subtitle>Metacritic Score: </Subtitle>
                  {game.metacritic === null ? (
                    <CriticScore>N/A</CriticScore>
                  ) : (
                    <CriticScore
                      href={game.metacritic_url}
                      target="_blank"
                      className={`score ${criticScore(game.metacritic)}`}
                    >
                      {game.metacritic}
                    </CriticScore>
                  )}
                </DetailsInfoItems>
                <DetailsInfoItems>
                  <Subtitle>Description: </Subtitle>
                  {game.description_raw === "" ? (
                    <Description>{game.description}</Description>
                  ) : (
                    <Description>{game.description_raw}</Description>
                  )}
                </DetailsInfoItems>
              </DetailsInfoContent>
              <ScreenshotContainer>
                <Subtitle>Screenshots</Subtitle>
                <SRLWrapper>
                  <ScreenshotGallery>
                    {screenshots.map((screenshot) => (
                      <ScreenshotItem key={screenshot.id}>
                        <ScreenshotImg src={screenshot.image} alt={game.name} />
                      </ScreenshotItem>
                    ))}
                  </ScreenshotGallery>
                </SRLWrapper>
              </ScreenshotContainer>
              <DetailsInfoItems>
                <WebsiteLink href={game.website} target="_blank">
                  {game.name} Website
                </WebsiteLink>
              </DetailsInfoItems>
            </DetailsContainer>
            <ScrollToTop visible={visible}>
              <ScrollToTopButton onClick={toTop}>
                <GiGamepadCross />
              </ScrollToTopButton>
            </ScrollToTop>
          </DetailsSection>
        </>
      )}
    </>
  );
};

export default Details;
