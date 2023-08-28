import * as Styled from "./styles";
import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";
import binance from "./assets/binance 1.svg";
import vector from "./assets/Vector.svg";
import blockchain from "./assets/blockchain.svg";
import bitmex from "./assets/bitmex 1.svg";
import Scroll from "./assets/scroll.svg";
import LiveAunctions from "./components/LiveAunctions";
import HowItWork from "./components/HowItWork";
import PopularCollections from "./components/PopularCollections";
import Categories from "./components/Categories";
import TopCreators from "./components/TopCreators";
import Subcribe from "./components/Subcribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Thumbnail></Thumbnail>
      <Styled.Blur></Styled.Blur>
      <Styled.ScrollDown>
        <img src={Scroll} alt="scroll" />
      </Styled.ScrollDown>
      <Styled.Brand>
        <img src={vector} alt="vector" />
        <img src={blockchain} alt="blockchain" />
        <img src={binance} alt="binance" />
        <img src={bitmex} alt="bitmex" />
      </Styled.Brand>
      <LiveAunctions></LiveAunctions>
      <HowItWork></HowItWork>
      <PopularCollections></PopularCollections>
      <Categories></Categories>
      <TopCreators></TopCreators>
      <Subcribe></Subcribe>
      <Footer></Footer>
    </>
  );
}

export default App;
