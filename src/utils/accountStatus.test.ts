import accountStatus from "./accountStatus";

import { expect, test } from "vitest";

test("Account status is given", () => {
  expect(accountStatus("012345678")).toBe("ERR");
  expect(accountStatus("123456789")).toBe("OK");
  expect(accountStatus("12345678?")).toBe("ILL");
});
