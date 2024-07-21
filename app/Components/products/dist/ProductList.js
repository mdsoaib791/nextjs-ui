"use strict";
exports.__esModule = true;
var useLocalProducts_1 = require("@/app/hooks/useLocalProducts");
var useRemoveLocalProduct_1 = require("@/app/hooks/useRemoveLocalProduct");
var react_1 = require("react");
var ProductList = function () {
    var _a = useLocalProducts_1.useLocalProducts(), localProducts = _a.localProducts, setLocalProducts = _a.setLocalProducts, error = _a.error, isLoading = _a.isLoading;
    var removeProductLocally = useRemoveLocalProduct_1.useRemoveLocalProduct(setLocalProducts).removeProductLocally;
    if (isLoading)
        return react_1["default"].createElement("div", null, "Loading...");
    if (error)
        return react_1["default"].createElement("div", null, "Some error occurred");
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("ul", null, localProducts.map(function (product) { return (react_1["default"].createElement("li", { key: product.id },
            product.title,
            react_1["default"].createElement("button", { onClick: function () { return removeProductLocally(product.id); } }, "Remove"))); }))));
};
exports["default"] = ProductList;
