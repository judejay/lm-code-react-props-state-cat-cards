import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";
import { Route, Routes, useLocation } from "react-router-dom";
import Cats from "./components/cats";
import IPet from "./data/pet";
import Dogs from "./components/dogs";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<IPet>>(catData);
  const [dogs, setDogs] = useState<Array<IPet>>(dogData);
  const location = useLocation();
  const siteLocation = location.pathname;
  const catCount = cats.length;
  const dogCount = dogs.length;
  return (
    <>
      <Navbar />
      {siteLocation.includes("dogs") ? (
        <Header pets={"Dogs"} petCount={dogCount} />
      ) : (
        <Header pets={"Cats"} petCount={catCount} />
      )}

      <Routes>
        <Route path="/cats" element={<Cats cats={cats} />} />
        <Route path="/dogs" element={<Dogs dogs={dogs} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
