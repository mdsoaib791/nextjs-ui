import { useEffect, useState } from 'react';
import { Product, useGetProductsQuery } from '../services/productService';

export const useLocalProducts = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [localProducts, setLocalProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products) {
      setLocalProducts(products);
    }
  }, [products]);

  return { localProducts, setLocalProducts, error, isLoading };
};
