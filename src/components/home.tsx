import React, { ChangeEvent, FormEvent, useState, EventHandler } from "react";
import IPet from "../data/pet";
interface HomeProps {}
type HtmlEvent = React.ChangeEvent<HTMLSelectElement>;
const Home: React.FC<HomeProps> = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  const [myTextInputValue, setMyTextInputValue] = useState<Partial<IPet>>({
    name: "",
    favFoods: [],
    birthYear: new Date().getFullYear(),
  });
  const [mySelectInputValue, setMySelectInputValue] =
    useState<IPet["species"]>("cat");

  const handleSelect: EventHandler<HtmlEvent> = (event: HtmlEvent): void => {
    console.log(event.target.value);
    setMySelectInputValue(event.target.value);
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.value);

    setMyTextInputValue({
      ...myTextInputValue,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <main className="welcome__container">
      <div className="welcome__text">
        This app lists your favorite pets and any pictures they have, with
        respect to copyright. Add your pet to the list!
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form__container">
          <div>
            {" "}
            <label className="form__label">
              Pick your favorite pet:
              <select value={mySelectInputValue} onChange={handleSelect}>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
              </select>
            </label>
          </div>
          <div>
            <label className="form__label">
              Name:
              <input
                type="text"
                value={myTextInputValue.name ?? ""}
                name="name"
                onChange={handleChange}
              />{" "}
            </label>
          </div>
          <div>
            <label className="form__label">
              Fav Foods:
              <input
                type="text"
                name="favFoods"
                value={myTextInputValue["favFoods"] ?? []}
                onChange={handleChange}
              />{" "}
            </label>
          </div>
          <div>
            <label className="form__label">
              Birth Year:
              <input
                type="number"
                name="birthYear"
                value={myTextInputValue.birthYear ?? new Date().getFullYear()}
                onChange={handleChange}
              />{" "}
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>{" "}
        </div>{" "}
      </form>
    </main>
  );
};

export default Home;
