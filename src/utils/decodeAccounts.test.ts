import decodeAccounts from "./decodeAccounts";
import { expect, test } from "vitest";

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
  expect(decodeAccounts(compliantAccounts)).toStrictEqual([
    {
      number: "012345678",
      status: "ERR",
    },
    {
      number: "123456789",
      status: "OK",
    },
  ]);
});
