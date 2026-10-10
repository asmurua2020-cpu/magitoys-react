import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <>
      <ul id="navbar" className={`navbar ${abierto ? "active" : ""}`}>
        <li><Link to="/" onClick={cerrar}>Inicio</Link></li>
        <li><Link to="/productos" onClick={cerrar}>Productos</Link></li>
        <li>
          <Link to="/carrito" onClick={cerrar}>
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </Link>
        </li>
        <span className="close" onClick={cerrar}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      </ul>

      <div className="mobile">
        <Link to="/carrito">
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        </Link>
        <i className="fas fa-bars" onClick={() => setAbierto(true)}></i>
      </div>
    </>
  );
}

export default NavBar;