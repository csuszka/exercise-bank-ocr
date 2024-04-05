import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
// import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui-components/ErrorFallback";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
  </ErrorBoundary>
);
