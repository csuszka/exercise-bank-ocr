export default function createDigit(input: string): string {
  console.log(input);

  if (input === " _ " + "| |" + "|_|") {
    return "0";
  }
  if (input === "   " + "  |" + "  |") {
    return "1";
  }
  if (input === " _ " + " _|" + "|_ ") {
    return "2";
  }
  if (input === " _ " + " _|" + " _|") {
    return "3";
  }
  if (input === "   " + "|_|" + "  |") {
    return "4";
  }
  if (input === " _ " + " _|" + "|_ ") {
    return "5";
  }
  if (input === " _ " + "|_ " + "|_|") {
    return "6";
  }
  if (input === " _ " + "  |" + "  |") {
    return "7";
  }
  if (input === " _ " + "|_|" + "|_|") {
    return "8";
  }
  if (input === " _ " + "|_|" + " _|") {
    return "9";
  }

  return "?";
}
