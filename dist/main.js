"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = "Hello world";
var n = 3;
var b = true;
var d = null;
var arr = ["yaya", "ma", 10];
var user = { firstname: "Yahya", lastname: "Mallak" };
var person = { name: "test", country: "Ma" };
var date = new Date();
var ca = function (e) {
    console.log("Hello");
};
var cb = function (e) {
    return 10;
};
var button = document.getElementById("btn");
var i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    var span = button === null || button === void 0 ? void 0 : button.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', increment);
var player = { firstname: "Leo", lastname: "Messi" };
function identity(arg) {
    return arg;
}
var arg = identity(10);
function consoleSize(arg) {
    return arg;
}
var size = consoleSize(['3', 10]);
function reverse(arr) {
    return __spreadArray([], arr, true).reverse();
}
