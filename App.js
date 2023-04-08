import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexaValue, setHexaValue] = useState("");
  const [isDarText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexaValue={hexaValue}
        isDarText={isDarText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        isDarText={isDarText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
