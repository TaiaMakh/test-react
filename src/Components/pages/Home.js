import React from "react";
import styled from "styled-components";
import device from "../../styles/device";
import { MainSubtitleGrey, MainTitle } from "../../styles/text";
import NavBar from "../NavBar";
import ScrollComponent from "../ScrollComponent";

export default function Home() {
  return (
    <MainDiv>
      <NavBar />
      <MarginDiv>
        <MainTitleBox>
          <MainTitle>Find your Oompa Loompa</MainTitle>
          <MainSubtitleGrey>There are more than 100k</MainSubtitleGrey>
        </MainTitleBox>
        <ScrollComponent />
      </MarginDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const MarginDiv = styled.div`
  margin: 0 5% 0;
  @media ${device.mobileL} {
    margin: 0 10% 0;
  }
`;
const MainTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
