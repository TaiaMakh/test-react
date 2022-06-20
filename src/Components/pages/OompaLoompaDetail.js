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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setOompasDetails,
  setNewOompasDetailsList,
} from "../../redux/actions/oompasActions";
import { ActionTypes } from "../../redux/constants/actionTypes";

export default function OompaLoompaDetail() {
  const [OompaInfo, setOompaInfo] = useState({});
  const params = useParams();
  const dispatch = useDispatch();

  const oompasDetail = useSelector(
    (state) => state.oompasStorage.oompasDetails
  );
  const oompaLoading = useSelector(
    (state) => state.oompasStorage.loadingOneOompa
  );

  const dateNow = new Date();

  const getOneOompaData = async () => {
    try {
      const response = await getOneOompaLoopma(params._id);
      if (response) {
        setOompaInfo(response);
        dispatch(
          setOompasDetails({
            ...response,
            date: new Date().toJSON(),
            id: params._id,
          })
        );
      }
    } catch (err) {
      dispatch({
        type: ActionTypes.OOMPAS_ERROR,
        payload: err,
      });
    }
  };

  useEffect(() => {
    const oneOompaDetail = oompasDetail.filter(
      (oompa) => oompa.id === params._id
    );
    if (oneOompaDetail.length > 0) {
      const takeOompasDate = new Date(oneOompaDetail[0].date);
      if (dateNow.getDate() > takeOompasDate.getDate()) {
        const newArrayOopmas = oompasDetail.filter(
          (oompa) => oompa.id !== params._id
        );
        dispatch(setNewOompasDetailsList(newArrayOopmas));
        getOneOompaData();
      } else {
        setOompaInfo(...oneOompaDetail);
      }
    } else {
      getOneOompaData();
    }
  }, []);

  return (
    <div>
      <NavBar />
      {oompaLoading ? (
        <LoadingDots />
      ) : (
        <CardDiv>
          <MainPicture src={OompaInfo.image} />
          <ColumnText>
            <RowDiv>
              <BoldTitle>
                {OompaInfo.first_name} {OompaInfo.last_name}
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
  flex-direction: column;
  max-width: 100%;
  margin: 5% 5% 0;
  @media ${device.mobileL} {
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    margin: 10% 10% 0;
    max-width: 80%;
  }
`;
const MainPicture = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin-right: 2%;
  @media ${device.mobileL} {
    max-width: 50%;
  }
`;
const ColumnText = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify: content: flex-start;
   @media ${device.mobileL} {
    max-width: 50%;
  }
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 15px;
  @media ${device.mobileL} {
    margin-top: 0;
  }
`;
const TextDiv = styled.div`
  margin-top: 10px;
`;
