"use client";
"use strict";
exports.__esModule = true;
var Hero_1 = require("./Components/Hero");
var ProductList_1 = require("./Components/products/ProductList");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Hero_1["default"], null),
        React.createElement(ProductList_1["default"], null)));
}
exports["default"] = Home;
