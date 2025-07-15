import { Link } from 'react-router-dom';

const Item = ({ product }) => (
  <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
    <h4>{product.name}</h4>
    <p>Precio: ${product.price}</p>
    <Link to={`/item/${product.id}`}>Ver detalle</Link>
  </div>
);

export default Item;