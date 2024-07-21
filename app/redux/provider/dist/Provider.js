"use strict";
exports.__esModule = true;
// src/Provider/ReduxProvider.tsx
var react_redux_1 = require("react-redux");
var store_1 = require("../store");
var ReduxProvider = function (_a) {
    var children = _a.children;
    return React.createElement(react_redux_1.Provider, { store: store_1["default"] }, children);
};
exports["default"] = ReduxProvider;
