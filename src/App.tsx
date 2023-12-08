import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Cat from "./data/cat";
import CatCard from "./components/cat_card";
import catData from "./data/cat-data";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const catCount = cats.length;
  return (
    <>
      <Navbar />
      <Header catCount={catCount} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard key={cat.id} catObject={cat} catIndex={index} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
