import { floorDecimalPlace } from "../src/common/core";

describe("core.ts test", () => {
  test("floorDecimalPlace", () => {
    // expect(floorDecimalPlace(1.3000)).toBe(1.3);
    // expect(floorDecimalPlace(1.3000, 1)).toBe(1.3);
    // expect(floorDecimalPlace(1.3000, 2)).toBe(1.3);

    expect(floorDecimalPlace(1.234)).toBe(1.2);
    expect(floorDecimalPlace(1.234, 1)).toBe(1.2);
    expect(floorDecimalPlace(1.234, 2)).toBe(1.23);
  });
});