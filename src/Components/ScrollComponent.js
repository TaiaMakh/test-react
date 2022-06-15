import React, { useCallback, useRef } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useFetch from "../Hooks/useFetch";
import LoadingDots from "../Loading/LoadingDots";
import { getAllOompaLoopma } from "../services/OompaLoopmaService";
import OompaLoopmaCard from "./OompaLoopmaCard";

export default function ScrollComponent() {

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);

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
    return list.map((oompa) => {
      return <OompaLoopmaCard key={oompa.id} oompaLoompa={oompa} />;
    });
  };

  return (
    <OompaLoompasBox>
      {list.length > 0 && showOompasList()}
      {loading && <LoadingDots />}
      {error && <p>Error</p>}
      <div ref={loader} />
    </OompaLoompasBox>
  );
}

const OompaLoompasBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5%;
`;
