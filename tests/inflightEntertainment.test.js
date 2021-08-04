import { canTwoMoviesFillFlight } from "../src/inflightEntertainment";

test("there are two movies that sum to flight length", () => {
  const movieLengths = [95, 100, 60, 110, 125];
  const flightLength = 210;
  expect(canTwoMoviesFillFlight(movieLengths, flightLength)).toBe(true);
});

test("there are no two movies that sum to flight length", () => {
  const movieLengths = [95, 100, 60, 110, 125];
  const flightLength = 270;
  expect(canTwoMoviesFillFlight(movieLengths, flightLength)).toBe(false);
});

test("there is a movie that is half the flight length", () => {
  const movieLengths = [100, 95];
  const flightLength = 200;
  expect(canTwoMoviesFillFlight(movieLengths, flightLength)).toBe(false);
});

test("fewer than two movies", () => {
  const movieLengths = [100];
  const flightLength = 200;
  expect(() => canTwoMoviesFillFlight(movieLengths, flightLength)).toThrow();
});
