import Button from "../button";
import Logo from "./components/logo";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Logo></Logo>
      </div>
      <div className="header-navlink header-navlink_item--pc">
        <a href="#" className="header-navlink_item">
          Demos
        </a>
        <a href="#" className="header-navlink_item">
          Style Guide
        </a>
        <a href="#" className="header-navlink_item">
          Membership
        </a>
        <div className="header-navlink_item--icon">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width={24}
            height={24}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
      <div className="header-navlink_item--icon">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="header-navlink_item--pc">
        <a href="#" className="header-navlink_item">
          Sign in
        </a>
        <a href="/" className="header-navlink_item--btn">
          <Button className="btn btn-primary">Become a subcriber</Button>
        </a>
      </div>
      <div className="header-navlink_item--icon mobile">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
