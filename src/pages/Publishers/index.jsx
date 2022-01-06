import { useState, useEffect } from "react";
import { publishersList } from "../../services/api";
import axios from "axios";
import Loading from "../../components/Loading";
import { GiGamepadCross } from "react-icons/gi";
import {
  PublishersSection,
  Title,
  PublishersContainer,
  PublishersCards,
  PublishersItemCard,
  PublishersCardInfo,
  PublisherName,
  Pagination,
  NextPage,
  PrevPage,
  FirstPage,
  ScrollToTop,
  ScrollToTopButton,
} from "./style";

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

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
    axios.get(`${publishersList()}&page=${currentPage}`).then((res) => {
      setPublishers(res.data.results);
      setLoading(false);
    });

    window.addEventListener("scroll", scrollToTop);
  }, [currentPage]);

  return loading ? (
    <Loading />
  ) : (
    <PublishersSection>
      <Title>Publishers</Title>
      <PublishersContainer>
        {publishers && publishers.length > 0 ? (
          publishers.map((publisher) => (
            <PublishersCards
              key={publisher.id}
              to={`/publisher/${publisher.id}`}
            >
              <PublishersItemCard
                style={{
                  background: `url(${publisher.image_background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              >
                <PublishersCardInfo>
                  <PublisherName>{publisher.name}</PublisherName>
                </PublishersCardInfo>
              </PublishersItemCard>
            </PublishersCards>
          ))
        ) : (
          <h1>No results found.</h1>
        )}
      </PublishersContainer>
      <Pagination>
        {publishers.length > 1 ? (
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
    </PublishersSection>
  );
};

export default Publishers;
