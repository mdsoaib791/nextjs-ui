import { configureStore } from '@reduxjs/toolkit';
import { productService } from '../services/productService'; // Correct path to your service

const store = configureStore({
  reducer: {

    [productService.reducerPath]: productService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productService.middleware),
});

export default store;
