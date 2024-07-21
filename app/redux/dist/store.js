"use strict";
var _a;
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var productService_1 = require("../services/productService"); // Correct path to your service
var store = toolkit_1.configureStore({
    reducer: (_a = {},
        _a[productService_1.productService.reducerPath] = productService_1.productService.reducer,
        _a),
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(productService_1.productService.middleware);
    }
});
exports["default"] = store;
