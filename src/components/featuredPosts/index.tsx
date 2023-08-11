import BackgroundCover from "../backgroundCover";
import SubTitle from "../subTitle";
import FeatureCard from "./component/featureCard";
import "./styles.css";

const FeaturedPosts = () => {
  return (
    <div className="featured-posts container">
      <SubTitle>Featured posts</SubTitle>
      <div className="featured-posts_container">
        <BackgroundCover></BackgroundCover>
        <p>Editor’s Choice</p>
        <h2 className="featuredposts_title">
          Get started with our best stories
        </h2>
        <div className="featured-posts_list">
          <FeatureCard></FeatureCard>
          <FeatureCard></FeatureCard>
          <FeatureCard></FeatureCard>
        </div>
        <div className="featured-posts_footer">
          <a href="#">See all featured posts →</a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
