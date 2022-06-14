import React from 'react';
import styled from "styled-components";

export default function NavBar() {
  return <MainNavBarDiv></MainNavBarDiv>;
}
const MainNavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: grey;
  height: 200px;
`;
