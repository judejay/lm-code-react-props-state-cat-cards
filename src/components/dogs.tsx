import IPet from "../data/pet";
import Card from "./card";

interface DogsProps {
  dogs: IPet[];
}

const Dogs: React.FC<DogsProps> = ({ dogs }) => {
  return (
    <main>
      <div className="cards__wrapper">
        {dogs.map((cat, index) => (
          <Card
            key={cat.id}
            catObject={cat}
            url={""}
            altText={""}
            licenceType={""}
            licenceUrl={""}
            attributionName={""}
            attributionUrl={""}
          />
        ))}
      </div>
    </main>
  );
};

export default Dogs;
