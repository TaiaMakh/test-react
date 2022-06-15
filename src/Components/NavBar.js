import React from "react";
import styled from "styled-components";
import device from "../styles/device";
import { BoldTitle } from "../styles/text";

export default function NavBar() {
  return (
    <MainNavBarDiv>
      <ContentDiv>
        <LogoIcon src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" />
        <BoldTitle>Oompa Loompa's Crew</BoldTitle>
      </ContentDiv>
    </MainNavBarDiv>
  );
}
const MainNavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: #d5d5d5;
  height: 50px;
  width: 100%;
`;

const LogoIcon = styled.img`
  width: 10%;
  margin-right: 25px;
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5%;
  @media ${device.mobileL} {
    margin-left: 10%;
  }
`;
