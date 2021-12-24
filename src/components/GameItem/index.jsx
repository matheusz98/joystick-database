import { useHistory } from "react-router-dom";
import { adjustImage } from "../../services/utils";
import {
  GameItemContent,
  GameItemCard,
  GameItemInfo,
  TitleAndPlatforms,
  Title,
  Platforms,
  Score,
  NotAvailableScore,
} from "./style";
import "./style.css";

import playstation from "../../assets/icons/playstation.svg";
import xbox from "../../assets/icons/xbox.svg";
import nintendo from "../../assets/icons/nintendo.svg";
import steam from "../../assets/icons/steam.svg";
import apple from "../../assets/icons/apple.svg";
import android from "../../assets/icons/android.png";
import linux from "../../assets/icons/linux.png";
import gamepad from "../../assets/icons/gamepad.svg";

const GameItem = ({ game }) => {
  const history = useHistory();

  const clickHandler = (id) => {
    history.push(`/games/${id}`);
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

  const getPlatforms = (platform) => {
    switch (platform) {
      case "PlayStation":
        return playstation;

      case "Xbox":
        return xbox;

      case "Nintendo":
        return nintendo;

      case "PC":
        return steam;

      case "iOS":
        return apple;

      case "Apple Macintosh":
        return apple;

      case "Linux":
        return linux;

      case "Android":
        return android;

      default:
        return gamepad;
    }
  };

  return (
    <GameItemContent>
      <GameItemCard
        onClick={() => clickHandler(game.id)}
        style={{
          background: `url(${adjustImage(game.background_image)})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <GameItemInfo>
          <TitleAndPlatforms>
            <Title>{game.name}</Title>
            <Platforms>
              {game.parent_platforms.map((platform) => (
                <ul key={platform.platform.id}>
                  <li>
                    <img
                      key={platform.platform.id}
                      src={getPlatforms(platform.platform.name)}
                      alt={platform.platform.name}
                    />
                  </li>
                </ul>
              ))}
            </Platforms>
          </TitleAndPlatforms>

          {game.metacritic !== null ? (
            <Score className={`score ${criticScore(game.metacritic)}`}>
              {game.metacritic}
            </Score>
          ) : (
            <NotAvailableScore>N/A</NotAvailableScore>
          )}
        </GameItemInfo>
      </GameItemCard>
    </GameItemContent>
  );
};

export default GameItem;
