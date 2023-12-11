import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import catData from "./data/cat-data";
import { Route, Routes } from "react-router-dom";
import Cats from "./components/cats";
import IPet from "./data/pet";

function App(): JSX.Element {
  const [pets, setPets] = useState<Array<IPet>>(catData);
  const catCount = pets.length;
  return (
    <>
      <Navbar />
      <Header catCount={catCount} />

      <Routes>
        <Route path="/cats" element={<Cats cats={pets} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
