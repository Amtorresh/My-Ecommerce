import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import productsData from '../data/products';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 1000);
    });

    fetchProducts.then((res) => {
      if (categoryId) {
        setProducts(res.filter(p => p.category === categoryId));
      } else {
        setProducts(res);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h3>{greeting || `Categoría: ${categoryId}`}</h3>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;