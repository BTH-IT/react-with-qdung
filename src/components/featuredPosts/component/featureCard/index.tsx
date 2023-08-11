import "./styles.css";

const FeatureCard = () => {
  return (
    <a href="#" className="feature-card">
      <div className="feature-card_image">
        <img
          src="https://reiro.fueko.net/content/images/size/w600/2022/10/photo-1519923834699-ef0b7cde4712.jpeg"
          alt="123123"
        />
      </div>
      <h2>AI can solve new problems very easy</h2>
      <div className="feature-card_by-author">
        by <a href="#">Daryl Wehner</a>
      </div>
    </a>
  );
};

export default FeatureCard;
