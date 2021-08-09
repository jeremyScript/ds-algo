import { getProductsOfAllOtherNumbers } from "../src/productsOfAllOtherNumbers";

test("Mixed integers", () => {
  const array = [3, -8, 2, -4, 7];
  expect(getProductsOfAllOtherNumbers(array)).toEqual([
    448, -168, 672, -336, 192,
  ]);
});

test("Two integers", () => {
  const array = [7, -7];
  expect(getProductsOfAllOtherNumbers(array)).toEqual([-7, 7]);
});

test("One integer", () => {
  const array = [7];
  expect(() => {
    getProductsOfAllOtherNumbers(array);
  }).toThrow();
});
