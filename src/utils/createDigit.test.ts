import createDigit from "./createDigit";

test("A digit is created based on an input string", () => {
  it("correctly gives back a 0", () => {
    expect(createDigit(" _ " + "| |" + "|_|")).toBe("0");
  });
  it("correctly gives back a 1", () => {
    expect(createDigit("   " + "  |" + "  |")).toBe("1");
  });
  it("correctly gives back a 2", () => {
    expect(createDigit(" _ " + " _|" + "|_ ")).toBe("2");
  });
  it("correctly gives back a 3", () => {
    expect(createDigit(" _ " + " _|" + " _|")).toBe("3");
  });
  it("correctly gives back a 4", () => {
    expect(createDigit("   " + "|_|" + "  |")).toBe("4");
  });
  it("correctly gives back a 5", () => {
    expect(createDigit(" _ " + " _|" + "|_ ")).toBe("5");
  });
  it("correctly gives back a 6", () => {
    expect(createDigit(" _ " + "|_ " + "|_|")).toBe("6");
  });
  it("correctly gives back a 7", () => {
    expect(createDigit(" _ " + "  |" + "  |")).toBe("7");
  });
  it("correctly gives back a 8", () => {
    expect(createDigit(" _ " + "|_|" + "|_|")).toBe("8");
  });
  it("correctly gives back a 9", () => {
    expect(createDigit(" _ " + "|_|" + " _|")).toBe("9");
  });
  it("correctly gives back a ?", () => {
    expect(createDigit(" _ " + "| |" + " _|")).toBe("?");
  });
});
