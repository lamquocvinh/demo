import Home from "./pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import DetailProject from "./";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/detail/:id" element={<DetailProject />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

