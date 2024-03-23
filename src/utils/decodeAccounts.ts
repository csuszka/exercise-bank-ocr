import { BankAccount } from "../types";

export default function decodeAccounts(): BankAccount[] {
  const accounts: BankAccount[] = [{ number: "00000000", status: "OK" }];
  return accounts;
}
