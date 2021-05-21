import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo nike" data-testid="logo" />
    </Link>
  );
};

export default Logo;
