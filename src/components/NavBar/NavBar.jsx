import "./navbar.css"
import logo_2 from "../../assets/logo_2.png"
import CartWidget from "../CartWidget/CartWidget.jsx";

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <img  className="logo" src={logo_2} alt="" width="240" />
      
      <ul className="categorias">
        <li><Link to="/category/macetero">Maceteros</Link></li>
        <li><Link to="/category/soportecelular">Soporte Celulares</Link></li>
        <li><Link to="/category/llaveros">Laveros</Link></li>
      </ul>
      <CartWidget/>
    </div>
  );
};

export default NavBar;
