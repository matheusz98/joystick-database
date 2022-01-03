import playstation from "../../assets/icons/playstation.svg";
import xbox from "../../assets/icons/xbox.svg";
import nintendo from "../../assets/icons/nintendo.svg";
import steam from "../../assets/icons/steam.svg";
import apple from "../../assets/icons/apple.svg";
import android from "../../assets/icons/android.png";
import linux from "../../assets/icons/linux.png";
import gamepad from "../../assets/icons/gamepad.svg";
import {
  GameCardsContent,
  GameItemCard,
  GameItemInfo,
  TitleAndPlatforms,
  Title,
  Platforms,
  Score,
  NotAvailableScore,
} from "./style";
import "./style.css";

const GameCards = ({ id, name, cover, platforms, metacritic }) => {
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
    <GameCardsContent id={id} to={`/games/${id}`}>
      <GameItemCard
        style={{
          background: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <GameItemInfo>
          <TitleAndPlatforms>
            <Title>{name}</Title>
            <Platforms>
              {platforms.map((platform) => (
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

          {metacritic !== null ? (
            <Score className={`score ${criticScore(metacritic)}`}>
              {metacritic}
            </Score>
          ) : (
            <NotAvailableScore>N/A</NotAvailableScore>
          )}
        </GameItemInfo>
      </GameItemCard>
    </GameCardsContent>
  );
};

export default GameCards;
