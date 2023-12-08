import Cat from "../data/cat";
import CatCard from "./cat_card";

interface CatsProps {
  cats: Cat[];
}

const Cats: React.FC<CatsProps> = ({ cats }) => {
  return (
    <main>
      <div className="cards__wrapper">
        {cats.map((cat, index) => (
          <CatCard key={cat.id} catObject={cat} catIndex={index} />
        ))}
      </div>
    </main>
  );
};

export default Cats;
