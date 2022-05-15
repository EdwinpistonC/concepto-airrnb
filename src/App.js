import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppRouter } from "./routers/AppRouter";

const Page = styled.div`
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Page>
      <AppRouter></AppRouter>
    </Page>
  );
}

export default App;
