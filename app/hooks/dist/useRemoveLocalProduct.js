"use strict";
exports.__esModule = true;
exports.useRemoveLocalProduct = void 0;
var react_1 = require("react");
exports.useRemoveLocalProduct = function (setLocalProducts) {
    var removeProductLocally = react_1.useCallback(function (id) {
        setLocalProducts(function (prevProducts) { return prevProducts.filter(function (product) { return product.id !== id; }); });
    }, [setLocalProducts]);
    return { removeProductLocally: removeProductLocally };
};
