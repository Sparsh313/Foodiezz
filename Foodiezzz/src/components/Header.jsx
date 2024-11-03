import { Company_Logo } from "../config";

const Logo = () => (
  <a href="/">
    <img className="logo" src={Company_Logo} alt="Company Logo" />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="Nav-items">
        <ul>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign in</li>
          <li>Sign up</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
