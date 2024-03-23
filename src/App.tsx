import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui-components/ErrorFallback";
import { FormEvent, useEffect, useState } from "react";
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
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="file"
            onChange={(event) => {
              const files = event?.target?.files;
              const file = files ? files[0] : null;
              setInputValue(file);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </ErrorBoundary>
      <table>
        <thead>
          <tr>
            <th scope="col">Account number</th>
            <th scope="col">Evaluation</th>
          </tr>
        </thead>
        <tbody>
          {displayedAccounts.map((account, index) => {
            return (
              <tr key={index}>
                <th scope="row">{account.number}</th>
                <td>{account.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
