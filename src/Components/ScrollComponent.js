import React, { useCallback, useRef } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useFetch from "../Hooks/useFetch";
import LoadingDots from "../Loading/LoadingDots";
import { getAllOompaLoopma } from "../services/OompaLoopmaService";
import device from "../styles/device";
import { MainSubtitleGrey, MainTitle } from "../styles/text";
import OompaLoopmaCard from "./OompaLoopmaCard";
import SearchInput from "./SearchInput";

export default function ScrollComponent() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    console.log(Search);
  }, [Search]);

  //   //for search input
  //   const handleChange = (e) => {
  //     setQuery(e.target.value);
  //   };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  const showOompasList = () => {
    console.log("etnering here");
    const lowerSearch = Search.toLowerCase();
    console.log(lowerSearch, "lower search");
    console.log(list);
    const filtredResults = list.filter((oneOompa) => {
      console.log(oneOompa.first_name.toLowerCase());
      const lowerCaseResult = oneOompa.first_name.toLowerCase();
      console.log(lowerCaseResult.includes(lowerSearch));
      return lowerCaseResult.includes(lowerSearch);
    });
    console.log(filtredResults, "filtred results");
    return filtredResults.map((oompa) => {
      return <OompaLoopmaCard key={oompa.id} oompaLoompa={oompa} />;
    });
  };

  return (
    <MarginDiv>
      <MainTitleBox>
        <SearchDiv>
          <SearchInput setSearch={setSearch} />
        </SearchDiv>
        <MainTitle>Find your Oompa Loompa</MainTitle>
        <MainSubtitleGrey>There are more than 100k</MainSubtitleGrey>
      </MainTitleBox>
      <OompaLoompasBox>
        {list.length > 0 && showOompasList()}
        {loading && <LoadingDots />}
        {error && <p>Error</p>}
        <div ref={loader} />
      </OompaLoompasBox>
    </MarginDiv>
  );
}

const MarginDiv = styled.div`
  margin: 0 5% 0;
  @media ${device.mobileL} {
    margin: 0 10% 0;
  }
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
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5%;
`;
const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 2%;
`;
