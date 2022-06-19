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
  //redux
  const oompasList = useSelector((state) => state.oompasStorage.oompas);
  useSelector((state) => console.log(state.oompasStorage.oompas));
  const oompasLoading = useSelector((state) =>
    console.log(state.oompasStorage.loading, "state line 16")
  );

  const [OompasListShow, setOompasListShow] = useState([]);
  // const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(page);
  const loader = useRef(null);
  const [Search, setSearch] = useState("");

  // const getOompasListStorage = () => {
  //   let oompas = [];
  //   oompasList.map((obj) => {
  //     return obj.results.map((oompasPage) => {
  //       return oompas.push(oompasPage);
  //     });
  //   });
  //   setOompasListShow([...OompasListShow, oompas]);
  //   console.log(oompas);
  // };

  // useEffect(() => {
  //   getOompasListStorage();
  // }, [page]);

  // useEffect(() => {
  //   console.log(OompasListShow);
  // }, [OompasListShow]);

  const handleChangePage = () => {
    if (Search.length === 0) {
      setPage((prev) => prev + 1);
    }
  };
  const handleObserver = useCallback(
    (entries) => {
      if (Search.length === 0) {
        const target = entries[0];
        if (target.isIntersecting) {
          // setPage((prev) => prev + 1);
          handleChangePage();
        }
      }
    },
    [Search]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    // if (Search.length < 1) {
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    // }
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
