import assert from "assert";

import { formatDate } from "./index.js";

describe("format Date", () => {
  it("should be a function", () => {
    assert.equal(typeof formatDate, "function");
  });

  it("should return a string", () => {
    assert.equal(typeof formatDate(new Date()), "string");
  });

  it("should format the date as Month DD, YYYY", () => {
    const dateStr = "2021-03-30T13:53:02.089Z";
    const date = new Date(dateStr);
    assert.equal(formatDate(date), "march 30, 2021");
  });
});
