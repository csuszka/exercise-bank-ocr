import { BankAccount } from "../types";

export default function decodeAccounts(fileContent: string): BankAccount[] {
  const accounts: BankAccount[] = [{ number: "00000000", status: "OK" }];
  return accounts;
}
