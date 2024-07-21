"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var Header_1 = require("./Components/Header");
var ReduxProvider_1 = require("./redux/provider/ReduxProvider");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Movie App",
    description: "Latest bollywood movies and songs"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement(ReduxProvider_1["default"], null,
                React.createElement(Header_1["default"], null),
                children))));
}
exports["default"] = RootLayout;
