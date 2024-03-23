import { BankAccount } from "../types";
import createDigit from "./createDigit";

export default function decodeAccounts(fileContent: string): BankAccount[] {
  const lines = fileContent.split("\r\n");

  let digitStrings = "";
  //reading lines from the file input
  for (let i = 0; i < lines.length - 2; i = i + 4) {
    const currentLine = lines[i];
    const secondLine = lines[i + 1];
    const thirdLine = lines[i + 2];
    //splitting up the lines to digit substrings
    for (let j = 0; j < lines[i].length; j = j + 3) {
      const firstRowOfDigit = currentLine.substring(j, j + 3);
      const secondRowOfDigit = secondLine.substring(j, j + 3);
      const thirdRowOfDigits = thirdLine.substring(j, j + 3);
      //combining the string pieces to get the string of the digit
      const digitString = firstRowOfDigit + secondRowOfDigit + thirdRowOfDigits;
      const digit = createDigit(digitString);

      digitStrings = digitStrings + digit;
    }
  }

  const accounts: BankAccount[] = [];

  for (let a = 0; a < digitStrings.length; a = a + 9) {
    const currentAccount = digitStrings.substring(a, a + 9);
    accounts.push({ number: currentAccount, status: "OK" });
  }
  return accounts;
}
