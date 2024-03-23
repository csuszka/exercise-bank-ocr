import { BankAccountStatus } from "../types";

export default function accountStatus(account: string): BankAccountStatus {
  //bad scan
  if (account.includes("?")) {
    return "ILL";
  }

  //failed sumcheck
  const sumCheck: number =
    account
      .split("")
      .reduce(
        (accumulator, currentValue, index) =>
          accumulator + (9 - index) * Number(currentValue),
        0
      ) % 11;

  if (sumCheck !== 0) {
    return "ERR";
  }
  //otherwise OK
  return "OK";
}
