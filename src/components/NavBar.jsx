import "./navbar.css"
import logo_2 from "../assets/logo_2.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
      <img  className="logo" src={logo_2} alt="" width="240" />
      
      <ul className="categorias">
        <li><a href="index.html">inicio</a></li>
        <li><a href="pages/nosotros.html">nosotros</a></li>
        <li><a href="pages/servicios.html">servicios</a></li>
        <li><a href="pages/proyectos.html">proyectos</a></li>
        <li><a href="pages/productos.html">productos</a></li>
        <li><a href="pages/contacto.html">contacto</a></li>
      </ul>

      <CartWidget/>
    </div>
  );
};

export default NavBar;
