"use strict";
exports.__esModule = true;
exports.useLocalProducts = void 0;
var react_1 = require("react");
var productService_1 = require("../services/productService");
exports.useLocalProducts = function () {
    var _a = productService_1.useGetProductsQuery(), products = _a.data, error = _a.error, isLoading = _a.isLoading;
    var _b = react_1.useState([]), localProducts = _b[0], setLocalProducts = _b[1];
    react_1.useEffect(function () {
        if (products) {
            setLocalProducts(products);
        }
    }, [products]);
    return { localProducts: localProducts, setLocalProducts: setLocalProducts, error: error, isLoading: isLoading };
};
