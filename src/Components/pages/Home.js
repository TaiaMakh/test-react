import React from 'react'
import styled from "styled-components";
import NavBar from '../NavBar';

export default function Home() {
  return (
    <MainDiv>
      <NavBar />
      <h1>Find your Oompa Loompa</h1>
      <h2>helloooooooooooo</h2>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`