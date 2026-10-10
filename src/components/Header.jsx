import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <header className="header">
      <Link to="/">
        <img src="/imagen/cumpleanos.ico" className="logo" alt="MagiToys" width="40" height="40" />
      </Link>
      {children}
    </header>
  );
}

export default Header;