import { buildWordCloudData } from "../src/wordCloudData";

test("given a simple-structured string, it builds a map correctly", () => {
  const str = "Rather than love, than money, than fame, give me truth.";
  const actual = buildWordCloudData(str);
  const expected = new Map([
    ["Rather", 1],
    ["than", 3],
    ["love", 1],
    ["money", 1],
    ["fame", 1],
    ["give", 1],
    ["me", 1],
    ["truth", 1],
  ]);
  expect(actual).toEqual(expected);
});

test("capitalized words are kept as such only if they're consistent", () => {
  const str =
    "All I know is that when I needed McDonald's, McDonald's was there for me all the time.";
  const actual = buildWordCloudData(str);
  const expected = new Map([
    ["all", 2],
    ["I", 2],
    ["know", 1],
    ["is", 1],
    ["that", 1],
    ["when", 1],
    ["needed", 1],
    ["McDonald's", 2],
    ["was", 1],
    ["there", 1],
    ["for", 1],
    ["me", 1],
    ["the", 1],
    ["time", 1],
  ]);
  expect(actual).toEqual(expected);
});
