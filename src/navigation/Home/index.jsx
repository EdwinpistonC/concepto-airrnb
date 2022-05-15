import React from "react";
import styled from "styled-components";
//import Button from "components/atom/Button";
import SearchSection from "components/organism/SearchSection";
import Suggestion from "components/organism/Suggestion";

//React Components
import Header from "components/organism/Header";
import Footer from "components/organism/Footer";

const Home = styled.div`
  flex-grow: 1;
`;

export default function Index() {
  return (
    <>
      <Header></Header>
      <Home>
        <SearchSection></SearchSection>
        <Suggestion></Suggestion>
      </Home>
      <Footer></Footer>
    </>
  );
}
