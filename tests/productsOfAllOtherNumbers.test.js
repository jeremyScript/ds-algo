import { getProductsOfAllOtherNumbers } from "../src/productsOfAllOtherNumbers";

test("mixed integers", () => {
  const array = [3, -8, 2, -4, 7];
  expect(getProductsOfAllOtherNumbers(array)).toEqual([
    448, -168, 672, -336, 192,
  ]);
});

test("two integers", () => {
  const array = [7, -7];
  expect(getProductsOfAllOtherNumbers(array)).toEqual([-7, 7]);
});

test("one integer", () => {
  const array = [7];
  expect(() => {
    getProductsOfAllOtherNumbers(array);
  }).toThrow();
});
