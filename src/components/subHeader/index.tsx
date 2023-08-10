import Search from "../search";
import "./styles.css";

const SubHeader = () => {
  return (
    <div className="sub-header container">
      <p className="sub-header_title">
        <span>Hey, we’re Reiro</span>. We promote positive culture through
        <span> inspiring articles</span> on health, design, and web.
      </p>
      <Search></Search>
    </div>
  );
};

export default SubHeader;
