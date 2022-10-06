import { isInteger } from './is-integer';

describe("when given something that is not a integer number", () => {
    test('should return false', () => {
        expect(isInteger(("test" as unknown) as number )).toEqual(false);
        expect(isInteger(12.45)).toEqual(false);
    });
});

describe("when given an integer number", () => {
    test("should return true", () => {
        expect(isInteger(12)).toEqual(true);
    });
});