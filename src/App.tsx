import BackgroundCover from "./components/backgroundCover";
import FeaturedPosts from "./components/featuredPosts";
import Footer from "./components/footer";
import Header from "./components/header";
import PopularTags from "./components/popularTags";
import PreviousPosts from "./components/previousPosts";
import SubHeader from "./components/subHeader";
import WhatNews from "./components/whatNews";
import YouLiked from "./components/youLiked";

function App() {
  return (
    <>
      <BackgroundCover></BackgroundCover>
      <Header></Header>
      <SubHeader></SubHeader>
      <PopularTags></PopularTags>
      <WhatNews></WhatNews>
      <FeaturedPosts></FeaturedPosts>
      <PreviousPosts></PreviousPosts>
      <YouLiked></YouLiked>
      <Footer></Footer>
    </>
  );
}

export default App;
