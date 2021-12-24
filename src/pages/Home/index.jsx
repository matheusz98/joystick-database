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
import { HomeSection, Title } from "./style";

const Home = ({ selectedItem }) => {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    let item;
    if (selectedItem === "games-home") {
      item = gamesHome();
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
      console.log(res);
    });
  }, [selectedItem]);

  return (
    <HomeSection>
      <Title>{title}</Title>
      <GameCards games={games} />
    </HomeSection>
  );
};

export default Home;
