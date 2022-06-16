import React from "react";
import styled from "styled-components";
import { BoldTitle, ThinGreyItalic, ThinGreyText } from "../styles/text";
import { Link } from "react-router-dom";

export default function OompaLoopmaCard({ oompaLoompa }) {
  // console.log(oompaLoompa, "component card oompa received");

  return (
    <CardDiv>
      <Link to={`/oompa-loompa/${oompaLoompa.id}`}>
        <MainImage src={oompaLoompa.image} />
        <ColumnDiv>
          <BoldTitle>
            {oompaLoompa.first_name} {oompaLoompa.last_name}
          </BoldTitle>
          <ThinGreyText>
            {oompaLoompa.gender === "F" ? "Woman" : "Man"}
          </ThinGreyText>
          <ThinGreyItalic>{oompaLoompa.profession}</ThinGreyItalic>
        </ColumnDiv>
      </Link>
    </CardDiv>
  );
}

const CardDiv = styled.div`
  cursor: pointer;
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
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
// const TextBox = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     margin/
// `
