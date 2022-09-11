import { countChange } from "./countChange.js";

describe("countChange", () => {
  it("Simple Case money 4 and coins [1,2] must be 3 combinations ", () => {
    const money = 4;
    const coins = [1, 2];
    const expected = 3;
    expect(countChange(money, coins)).toBe(expected);
  });

  it("No changes money 11 and coins [5,7] must be 0 combinations",()=>{
    const money = 11
    const coins =[5,7]
    const expected = 0;
    expect(countChange(money,coins)).toBe(expected)
  })
});


