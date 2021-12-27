import { useState, useEffect } from "react";
import axios from "axios";
import { gamesHome } from "../../services/api";
import Loading from "../../components/Loading";
import { GiGamepadCross } from "react-icons/gi";
import {
  HomeSection,
  Title,
  HomeContent,
  Pagination,
  NextPage,
  PrevPage,
  FirstPage,
  ScrollToTop,
  ScrollToTopButton,
} from "./style";
import GameCards from "../../components/GameCards";

const Home = () => {
  const [games, setGames] = useState([]);
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

  useEffect(() => {
    axios.get(`${gamesHome()}&page=${currentPage}`).then((res) => {
      setGames(res.data.results);
      setLoading(false);
    });
    window.addEventListener("scroll", scrollToTop);
  }, [currentPage]);

  return loading ? (
    <Loading />
  ) : (
    <HomeSection>
      <Title>Home</Title>
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
