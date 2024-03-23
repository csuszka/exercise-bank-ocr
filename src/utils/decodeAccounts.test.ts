import decodeAccounts from "./decodeAccounts";
import { expect, test } from "vitest";

const text = "\r\n";
const text2 = "                           \r\n";
const compliantAccounts =
  " _     _  _     _  _  _  _ \r\n" +
  "| |  | _| _||_||_ |_   ||_|\r\n" +
  "|_|  ||_  _|  | _||_|  ||_|\r\n" +
  "\r\n" +
  "    _  _     _  _  _  _  _ \r\n" +
  "  | _| _||_||_ |_   ||_||_|\r\n" +
  "  ||_  _|  | _||_|  ||_| _|\r\n" +
  "\r\n";

test("Accounts are decoded", () => {
  expect(decodeAccounts(compliantAccounts)).toBe("012345678");
});
