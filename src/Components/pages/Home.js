import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar";
import ScrollComponent from "../ScrollComponent";

export default function Home() {
  return (
    <MainDiv>
      <NavBar />
        <ScrollComponent />
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
