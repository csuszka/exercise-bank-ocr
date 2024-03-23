import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui-components/ErrorFallback";
import { useState } from "react";

type BankAccount = {
  number: string;
  status: "ERR" | "ILL" | "OK";
};

function App() {
  const [displayedAccounts /*setDisplayedAccounts*/] = useState<BankAccount[]>(
    []
  );
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form>
          <input type="file"></input>
          <button></button>
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
          {displayedAccounts.map((account) => {
            return (
              <tr>
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
