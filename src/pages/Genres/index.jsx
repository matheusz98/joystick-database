import { useState, useEffect } from "react";
import { gameGenres } from "../../services/api";
import axios from "axios";
import { GiGamepadCross } from "react-icons/gi";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import {
  GenresSection,
  Title,
  GenresContainer,
  GenresCards,
  GenresItemCard,
  GenreCardInfo,
  GenreName,
  ScrollToTop,
  ScrollToTopButton,
} from "./style";

const Genres = () => {
  const [genres, setGenres] = useState([]);
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
    axios.get(gameGenres()).then((res) => {
      setGenres(res.data.results);
      setLoading(false);
    });

    window.addEventListener("scroll", scrollToTop);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <GenresSection>
        <Title>Genres</Title>
        <GenresContainer>
          {genres && genres.length > 0 ? (
            genres.map((genre) => (
              <GenresCards key={genre.id} to={`/genre/${genre.id}`}>
                <GenresItemCard
                  style={{
                    background: `url(${genre.image_background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <GenreCardInfo>
                    <GenreName>{genre.name}</GenreName>
                  </GenreCardInfo>
                </GenresItemCard>
              </GenresCards>
            ))
          ) : (
            <h1>No results found</h1>
          )}
        </GenresContainer>
        <ScrollToTop visible={visible}>
          <ScrollToTopButton onClick={toTop}>
            <GiGamepadCross />
          </ScrollToTopButton>
        </ScrollToTop>
      </GenresSection>
      <Footer />
    </>
  );
};

export default Genres;
