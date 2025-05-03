import { createRoot } from "react-dom/client";
import Form from "./Form";

function App() {
  return (
    <>
      <Form />
    </>
  );
}

// biome-ignore lint/style/noNonNullAssertion: OK
const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
