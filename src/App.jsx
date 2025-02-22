import "./App.css";
import { Textarea } from "./components/ui/textarea";
import { TerminalDemo } from "./components/ui_com/TerminalDemo";
import { TextAnimation } from "./components/ui_com/TextAnimation";

function App() {
  return (
    <>
      <TerminalDemo />
      <TextAnimation />
      <Textarea />
    </>
  );
}

export default App;
