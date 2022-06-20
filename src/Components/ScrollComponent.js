import React, { useCallback, useRef } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useFetch from "../Hooks/useFetch";
import LoadingDots from "../Loading/LoadingDots";
import { getAllOompaLoopma } from "../services/OompaLoopmaService";
import device from "../styles/device";
import { MainSubtitleGrey, MainTitle } from "../styles/text";
import OompaLoopmaCard from "./OompaLoopmaCard";
import SearchInput from "./SearchInput";

export default function ScrollComponent() {
  const oompasList = useSelector((state) => state.oompasStorage.oompas);
  const oompasLoading = useSelector((state) => state.oompasStorage.loading);
  const error = useSelector((state) => state.oompasStorage.errorData);
  const [page, setPage] = useState(1);
  useFetch(page);

  const loader = useRef(null);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    if (oompasList.length > 0) {
      const actualPage = oompasList[oompasList.length - 1].current;
      setPage(actualPage);
    }
  }, []);

  const handleChangePage = () => {
    if (Search.length === 0) {
      setPage((prev) => prev + 1);
    }
  };
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    target.isIntersecting && handleChangePage();
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  const showOompasList = () => {
    const lowerSearch = Search.toLowerCase();

    const oompas = [];

    oompasList.map((obj) => {
      return obj.results.map((oompasPage) => {
        return oompas.push(oompasPage);
      });
    });

    const filtredResults = oompas.filter(
      (oneOompa) =>
        oneOompa.first_name.toLowerCase().includes(lowerSearch) ||
        oneOompa.last_name.toLowerCase().includes(lowerSearch)
    );
    return filtredResults.map((oompa, key) => {
      return <OompaLoopmaCard key={key} oompaLoompa={oompa} />;
    });
  };

  return (
    <MarginDiv>
      <div>
        <MainTitleBox>
          <SearchDiv>
            <SearchInput setSearch={setSearch} />
          </SearchDiv>
          <MainTitle>Find your Oompa Loompa</MainTitle>
          <MainSubtitleGrey>There are more than 100k</MainSubtitleGrey>
        </MainTitleBox>
        <OompaLoompasBox>
          {oompasList.length > 0 && showOompasList()}
          {oompasLoading && <LoadingDots />}
          {error != null && <p>Error</p>}
        </OompaLoompasBox>
      </div>
      {Search.length === 0 && <BottomDivLoader ref={loader} />}
    </MarginDiv>
  );
}

const MarginDiv = styled.div`
  margin: 0 5% 0;
  @media ${device.mobileL} {
    margin: 0 10% 0;
    min-width: 80%;
  }
  min-height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MainTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

const OompaLoompasBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5%;
  @media ${device.mobileL} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 8%;
  @media ${device.mobileL} {
    margin-bottom: 2%;
  }
`;

const BottomDivLoader = styled.div`
  bottom: 0;
  align-self: flex-end;
  width: 20px;
`;
