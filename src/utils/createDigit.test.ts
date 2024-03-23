import createDigit from "./createDigit";
import { expect, test } from "vitest";

test("A digit is created based on an input string", () => {
  expect(createDigit(" _ " + "| |" + "|_|")).toBe("0");
  expect(createDigit("   " + "  |" + "  |")).toBe("1");
  expect(createDigit(" _ " + " _|" + "|_ ")).toBe("2");
  expect(createDigit(" _ " + " _|" + " _|")).toBe("3");
  expect(createDigit("   " + "|_|" + "  |")).toBe("4");
  expect(createDigit(" _ " + "|_ " + " _|")).toBe("5");
  expect(createDigit(" _ " + "|_ " + "|_|")).toBe("6");
  expect(createDigit(" _ " + "  |" + "  |")).toBe("7");
  expect(createDigit(" _ " + "|_|" + "|_|")).toBe("8");
  expect(createDigit(" _ " + "|_|" + " _|")).toBe("9");
  expect(createDigit(" _ " + "| |" + " _|")).toBe("?");
});
