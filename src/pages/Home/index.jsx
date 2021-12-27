import { useState, useEffect } from "react";
import axios from "axios";
import {
  gamesHome,
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGames,
  gameGenres,
  gamePlatforms,
  gamePublishers,
} from "../../services/api";
import GameCards from "../../components/GameCards";
import { GiGamepadCross } from "react-icons/gi";
import {
  HomeSection,
  Title,
  Pagination,
  NextPage,
  PrevPage,
  FirstPage,
  ScrollToTop,
  ScrollToTopButton,
} from "./style";
import Loading from "../../components/Loading";

const Home = ({ selectedItem }) => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [title, setTitle] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const firstPage = () => {
    setCurrentPage(1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
    let item;
    if (selectedItem === "games-home") {
      item = `${gamesHome()}&page=${currentPage}`;
      setTitle("Home");
    } else if (selectedItem === "popular-games") {
      item = popularGamesUrl();
      setTitle("Popular Games");
    } else if (selectedItem === "upcoming-games") {
      item = upcomingGamesUrl();
      setTitle("Upcoming Games");
    } else if (selectedItem === "new-games") {
      item = newGamesUrl();
      setTitle("New Games");
    } else if (selectedItem === "game-genres") {
      item = gameGenres();
      setTitle("Genres");
    } else if (selectedItem === "game-platforms") {
      item = gamePlatforms();
      setTitle("Platforms");
    } else if (selectedItem === "game-publishers") {
      item = gamePublishers();
      setTitle("Publishers");
    } else {
      item = searchGames(selectedItem);
      setTitle(selectedItem);
    }

    axios.get(item).then((res) => {
      setGames(res.data.results);
      setLoading(false);
    });

    window.addEventListener("scroll", scrollToTop);
  }, [selectedItem, currentPage]);

  return loading ? (
    <Loading />
  ) : (
    <HomeSection>
      <Title>{title}</Title>
      <GameCards games={games} />
      <Pagination>
        <NextPage onClick={nextPage}>PRÓXIMA PÁGINA</NextPage>
        {currentPage > 1 ? (
          <>
            <PrevPage onClick={previousPage}>PÁGINA ANTERIOR</PrevPage>
            <FirstPage onClick={firstPage}>PRIMEIRA PÁGINA</FirstPage>
          </>
        ) : null}
      </Pagination>
      <ScrollToTop visible={visible}>
        <ScrollToTopButton onClick={toTop}>
          <GiGamepadCross />
        </ScrollToTopButton>
      </ScrollToTop>
    </HomeSection>
  );
};

export default Home;
