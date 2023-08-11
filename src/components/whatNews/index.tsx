import "../postCard/styles.css";
import "./styles.css";
import SubTitle from "../subTitle";
import PostCard from "../postCard";
import PostCardTag from "../postCardTag";
import Button from "../button";

const WhatNews = () => {
  return (
    <div className="what-new container">
      <SubTitle>WHAT'S NEW?</SubTitle>
      <div className="what-new_grid">
        <div className="what-new_left">
          <div className="post-card">
            <div className="post-card_image">
              <a href="#">
                <img
                  src="https://reiro.fueko.net/content/images/size/w1600/2022/10/photo-1657299156379-9edd28706711.jpeg"
                  alt="main"
                />
              </a>
            </div>
            <div className="post-card_tags">
              <PostCardTag href="#">Lifestyle</PostCardTag>
              <PostCardTag href="#">Eco</PostCardTag>
              <PostCardTag href="#">Health</PostCardTag>
            </div>
            <a href="#" className="post-card_title main">
              The trick to getting more done is to have the freedom to roam
              around
            </a>
            <p className="post-card_description">
              Vel lectus vel velit pellentesque dignissim nec id magna. Cras
              molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu
              venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam
              felis libero, congue quis ipsum et, lacinia maximus eros.
              Vestibulum ante ipsum primis in faucibus.
            </p>
            <div className="post-card_author">
              <div className="post-card_author-image-container">
                <div className="post-card_author-image">
                  <a href="#">
                    <img
                      src="https://reiro.fueko.net/content/images/size/w300/2022/10/andrea-ba-bMAbzit4DYk-unsplash.jpg"
                      alt="author1"
                    />
                  </a>
                </div>
                <div className="post-card_author-image">
                  <a href="#">
                    <img
                      src="https://reiro.fueko.net/content/images/size/w300/2022/10/sander-weeteling-dq7Wlq_evnc-unsplash.jpg"
                      alt="author2"
                    />
                  </a>
                </div>
              </div>
              <div className="post-card_info">
                <div className="post-card_by-author">
                  by <a href="#">Breana Flatley</a> &{" "}
                  <a href="#">Damian Erdman</a>
                </div>
                <div className="post-card_datetime">
                  October 7, 2022 ∙ 4 min read
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="what-new_right">
          <div className="what-new_subcriber">
            <SubTitle>NEWsletter</SubTitle>
            <p className="what-new_subcriber-title">
              Get all the latest posts delivered straight to your inbox.
            </p>
            <div className="input-container">
              <input type="text" placeholder="Your email address" />
            </div>
            <Button className="btn btn-secondary">Subcribe</Button>
          </div>
        </div>
        <div style={{ gridColumn: "auto/span 4" }}>
          <PostCard></PostCard>
        </div>
        <div style={{ gridColumn: "auto/span 4" }}>
          <PostCard></PostCard>
        </div>
      </div>
    </div>
  );
};

export default WhatNews;
