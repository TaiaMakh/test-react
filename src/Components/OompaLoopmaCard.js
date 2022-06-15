import React from "react";
import styled from "styled-components";
import { BoldTitle, ThinGreyItalic, ThinGreyText } from "../styles/text";

export default function OompaLoopmaCard({ oompaLoompa }) {
  return (
    <CardDiv>
      <MainImage src={oompaLoompa.image} />
      <BoldTitle>
        {oompaLoompa.first_name} {oompaLoompa.last_name}
      </BoldTitle>
      <ThinGreyText>
        {oompaLoompa.gender === "F" ? "Woman" : "Man"}
      </ThinGreyText>
      <ThinGreyItalic>{oompaLoompa.profession}</ThinGreyItalic>
    </CardDiv>
  );
}

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 30%;
  margin-bottom: 2%;
`;
const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;
// const TextBox = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     margin/
// `
