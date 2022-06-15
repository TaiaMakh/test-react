import React from "react";
import styled from "styled-components";

export default function SearchInput(props) {
  return (
    <SearchBox>
      <Input
        placeholder="Search"
        onChange={(e) => props.setSearch(e.target.value)}
        type="text"
      />
      <IconsDiv>
        <SeparationBar />
        <LupaIcon src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png" />
      </IconsDiv>
    </SearchBox>
  );
}

const SearchBox = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  padding: 10px;
  height: 50px;
  border: 1px solid #acacac;
  box-sizing: border-box;
  border-radius: 12px;
`;

export const Input = styled.input`
  border: none;

  font-family: "Manrope";
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  height: 100%;
  color: #07252c;
  letter-spacing: 0.05em;
  width: 100%;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    text-align: left;
    font-family: "Manrope";
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #acacac;
    letter-spacing: 0.05em;
  }
`;
const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SeparationBar = styled.div`
  width: 1px;
  height: 80%;
  background: #acacac;
  margin-right: 8px;
`;
const LupaIcon = styled.img`
    width: 50%;
`;
