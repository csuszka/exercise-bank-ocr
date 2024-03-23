export type BankAccount = {
  number: string;
  status: BankAccountStatus;
};

export type BankAccountStatus = "ERR" | "ILL" | "OK";
