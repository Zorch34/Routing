import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail"; // Asegúrate de que la importación sea correcta
import Mascotas from "./components/Mascotas";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mascotas />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/mascotas/:id" element={<Detail />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;