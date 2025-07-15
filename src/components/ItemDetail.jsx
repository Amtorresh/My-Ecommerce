const ItemDetail = ({ product }) => (
    <div style={{ padding: '2rem' }}>
    <h2>{product.name}</h2>
    <p>Precio: ${product.price}</p>
    <p>Categoría: {product.category}</p>
    <button>Agregar al carrito</button>
    </div>
);

export default ItemDetail;