"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var image_1 = require("next/image");
var io_1 = require("react-icons/io");
var io5_1 = require("react-icons/io5");
var ri_1 = require("react-icons/ri");
var ri_2 = require("react-icons/ri");
var Header = function () {
    var _a = react_2.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleMenu = function () {
        setIsOpen(!isOpen);
    };
    var navigationAreaStyle = isOpen
        ? 'translate-x-{0}'
        : '-translate-x-full';
    return (react_1["default"].createElement("div", { className: "bg-blue-600 text-lime-50 relative" },
        react_1["default"].createElement("div", { className: "container py-5 flex items-center justify-between gap-1" },
            react_1["default"].createElement("div", { className: "logo_area" },
                react_1["default"].createElement("a", { href: "/", title: "Home" },
                    react_1["default"].createElement(image_1["default"], { src: "/vercel.svg", alt: "Vercel Logo", className: "invert", width: 100, height: 24, priority: true }))),
            react_1["default"].createElement("ul", { className: "navigation_area flex flex-col transition-all  lg:lg:translate-x-0 absolute top-0 left-0 min-h-screen w-[240px] bg-black z-10 lg:relative lg:teft-auto lg:flex-row lg:bg-transparent lg:min-h-0 lg:w-auto lg:gap-3 lg:translate-x-{0} " + navigationAreaStyle },
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "/", className: 'px-2 py-3 transition-all w-full block border-b-2 border-slate-100 hover:bg-slate-200 hover:text-black focus:bg-slate-200 focus:text-black lg:border-0 lg:px-0 lg:py-0 lg:hover:bg-transparent' }, "Home")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "about", className: 'px-2 py-3 transition-all w-full block border-b-2 border-slate-200 hover:bg-slate-200 hover:text-black focus:bg-slate-200 focus:text-black lg:border-0 lg:px-0 lg:py-0 lg:hover:bg-transparent' }, "About")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "contact", className: 'px-2 py-3 transition-all w-full block border-b-2 border-slate-200 hover:bg-slate-200 hover:text-black focus:bg-slate-200 focus:text-black lg:border-0 lg:px-0 lg:py-0 lg:hover:bg-transparent' }, "Contact"))),
            react_1["default"].createElement("div", { className: "login_area flex justify-end items-cennter aitems-center gap-5" },
                react_1["default"].createElement("div", { className: "ca_rt" },
                    react_1["default"].createElement("a", { href: "cart", title: "Cart", className: 'block text-2xl p-2 rounded-sm bg-white  \r\n            bg-opacity-10 hover:bg-opacity-20  transition-al' },
                        react_1["default"].createElement(io5_1.IoCartOutline, null))),
                react_1["default"].createElement("div", { className: "log_in" },
                    react_1["default"].createElement("a", { href: "login", title: "Login", className: 'block text-2xl p-2 rounded-sm bg-white  \r\n            bg-opacity-10 hover:bg-opacity-20  transition-al' },
                        react_1["default"].createElement(io_1.IoMdLogIn, null))),
                react_1["default"].createElement("div", { className: "humburger_menu block text-4xl lg:hidden" },
                    react_1["default"].createElement("button", { className: "hamburger-icon", onClick: toggleMenu }, isOpen ? react_1["default"].createElement(ri_2.RiMenu3Fill, null) : react_1["default"].createElement(ri_1.RiMenuFill, null)))))));
};
exports["default"] = Header;
