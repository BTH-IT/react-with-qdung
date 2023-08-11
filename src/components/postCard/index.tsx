/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles.css";
import PostCardTag from "../postCardTag";

const PostCard = ({ description = false, author = true, tags = true }: any) => {
  return (
    <div className="post-card">
      <div className="post-card_image">
        <a href="#">
          <img
            src="https://reiro.fueko.net/content/images/size/w1600/2022/10/photo-1657299156379-9edd28706711.jpeg"
            alt="main"
          />
        </a>
      </div>
      {tags && (
        <div className="post-card_tags">
          <PostCardTag href="#">Lifestyle</PostCardTag>
          <PostCardTag href="#">Eco</PostCardTag>
          <PostCardTag href="#">Health</PostCardTag>
        </div>
      )}
      <a href="#" className="post-card_title">
        The trick to getting more done is to have the freedom to roam around
      </a>
      {description && (
        <p className="post-card_description">
          Vel lectus vel velit pellentesque dignissim nec id magna. Cras
          molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu
          venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam
          felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum
          ante ipsum primis in faucibus.
        </p>
      )}
      {author && (
        <div className="post-card_author mt">
          <div className="post-card_info">
            <div className="post-card_by-author">
              by <a href="#">Breana Flatley</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
