import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingDots from "../../Loading/LoadingDots";
import { getOneOompaLoopma } from "../../services/OompaLoopmaService";
import device from "../../styles/device";
import {
  BoldTitle,
  NormalText,
  ThinGreyItalic,
  ThinGreyText,
} from "../../styles/text";
import NavBar from "../NavBar";

export default function OompaLoompaDetail() {
  const [Loading, setLoading] = useState(true);
  const [OompaInfo, setOompaInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    (async function () {
      try {
        const response = await getOneOompaLoopma(params._id);
        console.log(response);
        if (response) {
          setOompaInfo(response);
          setLoading(false);
        }
      } catch {}
    })();
  }, []);

  return (
    <div>
      <NavBar />
      {Loading ? (
        <LoadingDots />
      ) : (
        <CardDiv>
          <MainPicture src={OompaInfo.image} />
          <ColumnText>
            <RowDiv>
              <BoldTitle>
                {OompaInfo.first_name}
                {OompaInfo.last_name}
              </BoldTitle>
            </RowDiv>
            <ThinGreyText>
              {OompaInfo.gender === "F" ? "Woman" : "Man"}
            </ThinGreyText>
            <ThinGreyItalic>{OompaInfo.profession}</ThinGreyItalic>
            <NormalText>
              <TextDiv
                dangerouslySetInnerHTML={{
                  __html: OompaInfo.description,
                }}
              />
            </NormalText>
          </ColumnText>
        </CardDiv>
      )}
    </div>
  );
}

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 80%;
  margin: 5% 5% 0;
  @media ${device.mobileL} {
    margin: 10% 10% 0;
  }
`;
const MainPicture = styled.img`
  max-width: 50%;
  max-height: 100%;
  object-fit: contain;
  margin-right: 2%;
`;
const ColumnText = styled.div`
max-width: 50%;
  display: flex;
  flex-direction: column;
  justify: content: flex-start;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
const TextDiv = styled.div`
  margin-top: 10px;
`;
