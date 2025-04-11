import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contact from "./components/Contact";
import Supabase from "./components/Supabase";
import Create from "./components/Create";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Create />
        <Supabase />
      </div>
    </>
  );
}

export default App;
