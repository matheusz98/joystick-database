import { useState, useEffect } from "react";
import { platformsList } from "../../services/api";
import axios from "axios";
import { getPlatforms } from "../../services/utils";
import Loading from "../../components/Loading";
import { GiGamepadCross } from "react-icons/gi";
import {
  PlatformsSection,
  Title,
  PlatformsContainer,
  PlatformsCards,
  PlatformsItemCard,
  PlatformsCardInfo,
  PlatformName,
  ScrollToTop,
  ScrollToTopButton,
} from "./style";

const Platforms = () => {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

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
    axios.get(platformsList()).then((res) => {
      setPlatforms(res.data.results);
      setLoading(false);
    });

    window.addEventListener("scroll", scrollToTop);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <PlatformsSection>
      <Title>Platforms</Title>
      <PlatformsContainer>
        {platforms && platforms.length > 0 ? (
          platforms.map((platform) => (
            <PlatformsCards key={platform.id} to={`/platform/${platform.id}`}>
              <PlatformsItemCard
                style={{
                  background: `url(${getPlatforms(platform.name)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              >
                <PlatformsCardInfo>
                  <PlatformName>{platform.name}</PlatformName>
                </PlatformsCardInfo>
              </PlatformsItemCard>
            </PlatformsCards>
          ))
        ) : (
          <h1>No results found.</h1>
        )}
      </PlatformsContainer>
      <ScrollToTop visible={visible}>
        <ScrollToTopButton onClick={toTop}>
          <GiGamepadCross />
        </ScrollToTopButton>
      </ScrollToTop>
    </PlatformsSection>
  );
};

export default Platforms;

{
  /* <div>
      {platforms.map((platform) => (
        <div key={platform.id}>
          <p>{platform.name}</p>
          <img src={platform.image_background} style={{ width: "360px" }} />
        </div>
      ))}
    </div> */
}
