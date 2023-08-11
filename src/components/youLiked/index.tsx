import PostCard from "../postCard";
import SubTitle from "../subTitle";
import "./styles.css";

const YouLiked = () => {
  return (
    <div className="you-liked container">
      <SubTitle>YOU MIGHT ALSO LIKE</SubTitle>
      <div className="you-liked_list">
        <PostCard tags={false} author={false}></PostCard>
        <PostCard tags={false} author={false}></PostCard>
        <PostCard tags={false} author={false}></PostCard>
        <PostCard tags={false} author={false}></PostCard>
        <PostCard tags={false} author={false}></PostCard>
      </div>
    </div>
  );
};

export default YouLiked;
