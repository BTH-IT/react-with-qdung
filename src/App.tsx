import { useEffect, useState } from "react";
import * as Styled from "./styles";
import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";

function App() {
  return (
    <Styled.AppWrapper>
      <Header></Header>
      <Thumbnail></Thumbnail>
    </Styled.AppWrapper>
  );
}

export default App;
