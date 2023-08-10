/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import SubTitle from "../subTitle";
import PopularTagItem from "./components/popularTagItem";
import "./styles.css";

const list: any = [1, 2, 3, 4, 5, 6, 7];

const PopularTags = () => {
  return (
    <div className="popular-tags container">
      <SubTitle>POPULAR TAGS</SubTitle>
      <div className="popular-tags_list">
        {list.map((item: number) => (
          <PopularTagItem key={item}></PopularTagItem>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
