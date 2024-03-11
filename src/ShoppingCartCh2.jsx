import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCartCh2() {
  const [
    products,
    setProducts
  ] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }));
  }

  function handleDecreaseClick(productId) {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === productId) {
          const newCount = Math.max(product.count - 1, 0);
          if (newCount === 0) {
            // Remove the product from the cart if count becomes 0
            return null;
          } else {
            return { ...product, count: newCount };
          }
        } else {
          return product;
        }
      }).filter(Boolean) // Filter out null entries
    );
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => handleIncreaseClick(product.id)}>+</button>
          <button onClick={() => handleDecreaseClick(product.id)}>-</button>
        </li>
      ))}
    </ul>
  );
}
