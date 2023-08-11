import Button from "../button";
import PostCard from "../postCard";
import SubTitle from "../subTitle";
import "./styles.css";

const PreviousPosts = () => {
  return (
    <div className="previous-posts container">
      <SubTitle>previous posts</SubTitle>
      <div className="previous-posts_grid">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
      <div className="previous-posts_footer">
        <Button className="btn btn-primary">Load more</Button>
      </div>
    </div>
  );
};

export default PreviousPosts;
