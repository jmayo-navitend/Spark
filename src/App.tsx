import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import electronLogo from "/electron.svg";
import tailwindcssLogo from "/tailwindcss.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-stone-800 dark:text-stone-200 ">
      <div className="flex justify-center gap-4">
        <a href="https://vite.dev">
          <img
            src={viteLogo}
            className="logo vite animate-pulse"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev">
          <img
            src={reactLogo}
            className="logo react animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
        <a href="https://www.electronjs.org/">
          <img
            src={electronLogo}
            className="logo electron animate-bounce"
            alt="Electron logo"
          />
        </a>
        <a href="https://tailwindcss.com/">
          <img
            src={tailwindcssLogo}
            className="logo tailwindcss animate-[ping_2s_ease-in-out_infinite] scale-80"
            alt="Tailwind CSS logo"
          />
        </a>
      </div>
      <h1 className="text-6xl font-medium">Vite + React + Electron </h1>
      <h2 className="text-2xl mt-4">with Tailwind CSS</h2>
      <div className="p-8 flex flex-col gap-4 place-items-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <p className="text-stone-500">
          Click on the Vite, React, Electron, and Tailwind CSS logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
