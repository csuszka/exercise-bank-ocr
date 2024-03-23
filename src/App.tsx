import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui-components/ErrorFallback";
import { FormEvent, useState } from "react";
import { BankAccount } from "./types";
import decodeAccounts from "./utils/decodeAccounts";

function App() {
  const [displayedAccounts, setDisplayedAccounts] = useState<BankAccount[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const result = decodeAccounts();

    setDisplayedAccounts((displayedAccounts) => {
      const newDisplayedAccounts = [...displayedAccounts, ...result];
      return newDisplayedAccounts;
    });
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input type="file"></input>
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
