import IPet from "../data/pet";
import Card from "./card";

interface DogsProps {
  dogs: IPet[];
}

const Dogs: React.FC<DogsProps> = ({ dogs }) => {
  return (
    <main>
      <div className="cards__wrapper">
        {dogs.map((dog, index) => (
          <Card
            key={dog.id}
            catObject={dog}
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
