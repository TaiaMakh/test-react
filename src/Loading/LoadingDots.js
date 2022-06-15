import lottie from "lottie-web";
import { useEffect } from "react";
import styled from "styled-components";
import loadingDots from "./loadingDotsLottie.json";

const LoadingDots = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#lottie"), // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingDots, // the path to the animation json
    });
  }, []);

  return <MainDiv id="lottie"></MainDiv>;
};

const MainDiv = styled.div`
  margin-top: 50%;
`;
export default LoadingDots;
