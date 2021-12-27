import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { gameDetailsUrl, gameScreenshots } from "../../services/api";
import { adjustImage } from "../../services/utils";

const Details = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    axios.get(gameDetailsUrl(id)).then((res) => {
      setGame(res.data);
    });

    axios.get(gameScreenshots(id)).then((res) => {
      setScreenshots(res.data.results);
    });
  }, [id]);

  return (
    <>
      {game && (
        <div>
          <div>
            <h2>{game.name}</h2>
            <img src={game.background_image} />
            {screenshots.map((screenshot) => (
              <img src={adjustImage(screenshot.image)} key={screenshot.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
