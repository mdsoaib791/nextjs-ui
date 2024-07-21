import { useCallback } from 'react';
import { Product } from '../services/productService';

export const useRemoveLocalProduct = (setLocalProducts: React.Dispatch<React.SetStateAction<Product[]>>) => {
  const removeProductLocally = useCallback((id: number) => {
    setLocalProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  }, [setLocalProducts]);

  return { removeProductLocally };
};
