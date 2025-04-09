import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contact from "./components/Contact";
import Supabase from "./components/Supabase";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Contact />
        <Supabase />
      </div>
    </>
  );
}

export default App;
