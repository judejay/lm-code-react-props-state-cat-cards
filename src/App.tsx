import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Cat from "./data/cat";
import catData from "./data/cat-data";
import { Route, Routes } from "react-router-dom";
import Cats from "./components/cats";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const catCount = cats.length;
  return (
    <>
      <Navbar />
      <Header catCount={catCount} />

      <Routes>
        <Route path="/cats" element={<Cats cats={cats} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
