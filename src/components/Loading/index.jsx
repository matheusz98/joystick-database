import LoadingGif from "../../assets/loading.gif";
import styled from "styled-components";

const LoadingContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  transition: 0.3s ease-in-out;
  animation: loading 3s linear infinite alternate;

  @keyframes loading {
    from {
      top: 0;
    }

    to {
      top: 100px;
    }
  }
`;

export const LoadingImg = styled.img`
  width: 30%;
`;

const Loading = () => {
  return (
    <LoadingContent>
      <LoadingImg src={LoadingGif} alt="Loading..." />
    </LoadingContent>
  );
};

export default Loading;
