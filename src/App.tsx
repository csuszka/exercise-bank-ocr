import { FormEvent, useState } from "react";
import { BankAccount } from "./types";
import decodeAccounts from "./utils/decodeAccounts";

function App() {
  const [displayedAccounts, setDisplayedAccounts] = useState<BankAccount[]>([]);
  const [inputValue, setInputValue] = useState<File | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const fileContents = await inputValue?.text();
    const result = decodeAccounts(fileContents ?? "");

    setDisplayedAccounts((displayedAccounts) => {
      const newDisplayedAccounts = [...displayedAccounts, ...result];
      return newDisplayedAccounts;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="flex items-end"
      >
        <input
          id="file-upload"
          className="hidden"
          type="file"
          onChange={(event) => {
            const files = event?.target?.files;
            const file = files ? files[0] : null;
            setInputValue(file);
          }}
        ></input>
        <label
          htmlFor="file-upload"
          className="bg-slate-200 p-3 m-5 mt-60 rounded-md"
        >
          Upload file
        </label>
        <button className="bg-slate-200 p-3 m-5 rounded-md">Analyze</button>
      </form>
      <table>
        <thead>
          <tr>
            <th scope="col" className="pr-5">
              Account number
            </th>
            <th scope="col" className="pr-5">
              Evaluation
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedAccounts.map((account, index) => {
            return (
              <tr key={index}>
                <th scope="row" className="font-normal text-left">
                  {account.number}
                </th>
                <td
                  className={`pr-5 text- ${
                    account.status === "OK"
                      ? "text-emerald-600"
                      : account.status === "ILL"
                      ? "text-yellow-600"
                      : account.status === "ERR"
                      ? "text-red-600"
                      : ""
                  }`}
                >
                  {account.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
