import { useState, useEffect } from "react";
import { platformsList } from "../../services/api";
import { getPlatforms } from "../../services/utils";
import axios from "axios";
import { GiGamepadCross } from "react-icons/gi";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import {
  PlatformsSection,
  Title,
  PlatformsContainer,
  PlatformsCards,
  PlatformsItemCard,
  PlatformsCardInfo,
  PlatformName,
  Pagination,
  NextPage,
  PrevPage,
  FirstPage,
  ScrollToTop,
  ScrollToTopButton,
} from "./style";

const Platforms = () => {
  const [platforms, setPlatforms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

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
    axios.get(`${platformsList()}&page=${currentPage}`).then((res) => {
      setPlatforms(res.data.results);
      setLoading(false);
    });

    window.addEventListener("scroll", scrollToTop);
  }, [currentPage]);

  return loading ? (
    <Loading />
  ) : (
    <>
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
        <Pagination>
          {platforms.length > 1 ? (
            <>
              <NextPage onClick={nextPage} />
              {currentPage > 1 ? (
                <>
                  <PrevPage onClick={previousPage} />
                  <FirstPage onClick={firstPage} />
                </>
              ) : null}
            </>
          ) : null}
        </Pagination>
        <ScrollToTop visible={visible}>
          <ScrollToTopButton onClick={toTop}>
            <GiGamepadCross />
          </ScrollToTopButton>
        </ScrollToTop>
      </PlatformsSection>
      <Footer />
    </>
  );
};

export default Platforms;
