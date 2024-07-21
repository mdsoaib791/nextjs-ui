import { useLocalProducts } from '@/app/hooks/useLocalProducts';
import { useRemoveLocalProduct } from '@/app/hooks/useRemoveLocalProduct';
import React from 'react';
 

const ProductList = () => {
  const { localProducts, setLocalProducts, error, isLoading } = useLocalProducts();
  const { removeProductLocally } = useRemoveLocalProduct(setLocalProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Some error occurred</div>;

  return (
    <div>
      <ul>
        {localProducts.map(product => (
          <li key={product.id}>
            {product.title}
            <button onClick={() => removeProductLocally(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
