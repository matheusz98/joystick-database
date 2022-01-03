import { useState, useEffect } from "react";
import axios from "axios";
import {
  gamesHome,
  popularGamesUrl,
  newGamesUrl,
  searchGamesURL,
} from "../../services/api";
import Loading from "../../components/Loading";
import { GiGamepadCross } from "react-icons/gi";
import GameCards from "../../components/GameCards";
import SearchBar from "../../components/SearchBar";
import {
  HomeSection,
  Title,
  SearchContainer,
  HomeContent,
  Pagination,
  NextPage,
  PrevPage,
  FirstPage,
  ScrollToTop,
  ScrollToTopButton,
} from "./style";

const Home = ({ selectedPage }) => {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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

  const capitalizeWord = (str) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

  useEffect(() => {
    setLoading(true);

    let page;
    if (selectedPage === "games-home") {
      page = `${gamesHome()}&page=${currentPage}`;
      setTitle("Home");
    } else if (selectedPage === "popular-games") {
      page = `${popularGamesUrl()}&page=${currentPage}`;
      setTitle("Popular Games");
    } else if (selectedPage === "new-games") {
      page = `${newGamesUrl()}&page=${currentPage}`;
      setTitle("New Games");
    } else {
      page = `${searchGamesURL(selectedPage)}&page=${currentPage}`;
      setTitle(capitalizeWord(selectedPage));
    }

    axios.get(page).then((res) => {
      setGames(res.data.results);
      setLoading(false);
    });

    window.addEventListener("scroll", scrollToTop);
  }, [selectedPage, currentPage]);

  return loading ? (
    <Loading />
  ) : (
    <HomeSection>
      <Title>{title}</Title>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <HomeContent>
        {games &&
          games.map((game) => (
            <GameCards
              key={game.id}
              id={game.id}
              cover={game.background_image}
              name={game.name}
              platforms={game.parent_platforms}
              metacritic={game.metacritic}
            />
          ))}
      </HomeContent>
      <Pagination>
        <NextPage onClick={nextPage} />
        {currentPage > 1 ? (
          <>
            <PrevPage onClick={previousPage} />
            <FirstPage onClick={firstPage} />
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
