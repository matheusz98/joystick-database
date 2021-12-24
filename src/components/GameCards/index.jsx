import GameItem from "../GameItem";
import { GameCardsContent } from "./style";

const GameCards = ({ games }) => {
  return (
    <GameCardsContent>
      {games.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </GameCardsContent>
  );
};

export default GameCards;
