"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    return res.sendStatus(200);
});
app.post('/api/v1', function (req, res) {
    console.log(req.body);
    return res.send("welcome");
});
console.log("hello keynes");
app.listen(4000, function () {
    console.log("Application listening at http://localhost:4000");
});
