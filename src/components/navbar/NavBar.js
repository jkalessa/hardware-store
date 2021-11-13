import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <a href="https://www.google.com.pe/">
        <img
          className="logo"
          src="/assets/grab-logo-vector.svg"
          alt="logotipo"
        />
      </a>
      <ul>
        <li>
          <a href="https://www.google.com.pe/">Inicio</a>
        </li>
        <li>
          <a href="https://www.google.com.pe/">Ofertas</a>
        </li>
        <li>
          <a href="https://www.google.com.pe/">Marcas</a>
        </li>
        <li>
          <a href="https://www.google.com.pe/">Nosotros</a>
        </li>
        <li>
          <a href="https://www.google.com.pe/">Contactanos</a>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
