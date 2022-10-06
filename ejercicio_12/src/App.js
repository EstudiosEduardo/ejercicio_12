import React, { useState } from "react";

import "./App.css";

import Carrousel from "./components/Carrousel/Carrousel";
import imagen1 from "./assets/images/abeja.jpg";
import imagen2 from "./assets/images/amor.jpg";
import imagen3 from "./assets/images/camarografo.jpg";
import imagen4 from "./assets/images/linternas.jpg";
import imagen5 from "./assets/images/louvre.jpg";
import imagen6 from "./assets/images/lutier.jpg";
import imagen7 from "./assets/images/monito.jpg";
import imagen8 from "./assets/images/petronas.jpg";
import imagen9 from "./assets/images/rinoceronte.jpg";
import imagen10 from "./assets/images/vapor.jpg";
import imagen11 from "./assets/images/windows.jpg";
import imagen12 from "./assets/images/zorro.jpg";

const srcImageList = [
  [imagen1, "Abeja"],
  [imagen2, "Amor"],
  [imagen3, "Camarógrafo"],
  [imagen4, "Linternas"],
  [imagen5, "Louvre"],
  [imagen6, "Lutier"],
  [imagen7, "Monito"],
  [imagen8, "Petronas"],
  [imagen9, "Rinoceronte"],
  [imagen10, "Vapor"],
  [imagen11, "Windows wallpaper"],
  [imagen12, "Zorro"],
];

function App() {
  const [cant, setCant] = useState(1);

  const title = "Agregar imagen";
  const titleReset = "Resetear Carrousel";
  const agregar = () => cant > srcImageList.length - 1 ? setCant(cant) : setCant(cant + 1);
  const resetear = () => setCant(1);
  const imagenes = srcImageList.filter((img, index) => index < cant);

  return (
    <div className="App">
      <header className="App-header">
        <Carrousel
          onClick={agregar}
          cant={cant}
          title={title}
          titleReset={titleReset}
          src={imagenes}
          alt={"lala"}
          reset={resetear}
        />
      </header>
    </div>
  );
}

export default App;
