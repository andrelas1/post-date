"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var index_js_1 = require("./index.js");
describe("format Date", function () {
    it("should be a function", function () {
        assert_1.default.equal(typeof index_js_1.formatDate, "function");
    });
    it("should return a string", function () {
        assert_1.default.equal(typeof (0, index_js_1.formatDate)(new Date()), "string");
    });
    it("should format the date as Month DD, YYYY", function () {
        var dateStr = "2021-03-30T13:53:02.089Z";
        var date = new Date(dateStr);
        assert_1.default.equal((0, index_js_1.formatDate)(date), "march 30, 2021");
    });
});
