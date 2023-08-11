import Button from "../button";
import Logo from "../header/components/logo";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-top_left">
          <Logo></Logo>
          <p>
            A minimal, functional theme for running a paid-membership
            publication on Ghost.
          </p>
        </div>
        <div className="footer-top_right">
          <a href="#">
            <Button className="btn btn-primary">Become a subscriber →</Button>
          </a>
          <p>Get all the latest posts delivered straight to your inbox.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-bottom_list">
          <li className="footer-bottom_item title">Social</li>
          <li className="footer-bottom_item">
            <a href="#">Facebook</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Twitter</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Kickstarter</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Vimeo</a>
          </li>
        </ul>
        <ul className="footer-bottom_list">
          <li className="footer-bottom_item title">About</li>
          <li className="footer-bottom_item">
            <a href="#">Style Guide</a>
          </li>
          <li className="footer-bottom_item">
            <a href="#">Feature</a>
          </li>
          <li className="footer-bottom_item">
            <a href="#">Contact</a>
          </li>
          <li className="footer-bottom_item">
            <a href="#">404</a>
          </li>
        </ul>
        <ul className="footer-bottom_list">
          <li className="footer-bottom_item title">Features</li>
          <li className="footer-bottom_item">
            <a href="">Demos</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Light version</a>{" "}
          </li>
          <li className="footer-bottom_item">
            <a href="">Sepia version</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Dark version</a>
          </li>
        </ul>
        <ul className="footer-bottom_list">
          <li className="footer-bottom_item title">Membership</li>
          <li className="footer-bottom_item">
            <a href="">Editor’s Choice</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Membership</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Account Free</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Account Paid</a>
          </li>
        </ul>
        <ul className="footer-bottom_list">
          <li className="footer-bottom_item title">Resources</li>
          <li className="footer-bottom_item">
            <a href="">Sign in</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Sign up</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Tags</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Authors</a>
          </li>
        </ul>
        <ul className="footer-bottom_list">
          <li className="footer-bottom_item title">Company</li>
          <li className="footer-bottom_item">
            <a href="">fueko</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Showcase</a>
          </li>
          <li className="footer-bottom_item">
            <a href="">Get Theme</a>
          </li>
        </ul>
      </div>
      <div className="sub-footer">
        © Reiro 2023. Published with Ghost and Reiro.
      </div>
    </footer>
  );
};

export default Footer;
