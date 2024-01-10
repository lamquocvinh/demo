import Home from "./pages/test";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Pile from "./pages/pile";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:no/pile" element={<Pile />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

