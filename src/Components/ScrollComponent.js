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
  // const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const { loading, error, list } = useFetch(page);
  const loader = useRef(null);
  const [Search, setSearch] = useState("");
  const [Searching, setSearching] = useState(false);

  useEffect(() => {
    if (Search.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
    console.log(Search.length, "use effect line 20");
  }, [Search]);

  //   //for search input
  //   const handleChange = (e) => {
  //     setQuery(e.target.value);
  //   };

  const handleObserver = useCallback((entries) => {
    console.log(Searching, "searching inside handleObserver");
    console.log(entries, "entries");
    console.log(Search, "search line 30");
    if (Search.length < 1) {
      console.log(Search, "entering donde no toca");
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    console.log(Search, "search line 46");
    if (Search.length < 1) {
      const observer = new IntersectionObserver(handleObserver, option);
      if (loader.current) observer.observe(loader.current);
    }
  }, [handleObserver]);

  const showOompasList = () => {
    console.log("etnering here");
    const lowerSearch = Search.toLowerCase();
    console.log(lowerSearch, "lower search");
    console.log(list);
    const filtredResults = list.filter(
      (oneOompa) =>
        oneOompa.first_name.toLowerCase().includes(lowerSearch) ||
        oneOompa.last_name.toLowerCase().includes(lowerSearch)
    );
    console.log(filtredResults, "filtred results");
    return filtredResults.map((oompa, key) => {
      return <OompaLoopmaCard key={key} oompaLoompa={oompa} />;
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
        <BottomDivLoader ref={loader} />
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

const BottomDivLoader = styled.div`
  border: 1px solid red;
  bottom: 0;
  align-self: flex-end;
  width: 20px;
`;
