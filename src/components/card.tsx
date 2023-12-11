import Cat from "../data/pet";
import IImage from "../data/image";
import Image from "./image";

interface CardProps {
  catObject: Cat;
  image?: IImage;
  url: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName: string;
  attributionUrl: string;
}

const Card: React.FC<CardProps> = ({
  catObject: { name, species, favFoods, birthYear },
  image,
  url,
  altText,
  licenceType,
  licenceUrl,
  attributionName,
  attributionUrl,
}) => (
  <div className="card">
    <h3 className="card__text card__header">{name}</h3>
    <p className="card__text">Species: {species}</p>
    <p className="card__text">Favourite Food(s): {favFoods}</p>
    <p className="card__text">Birth Year: {birthYear}</p>
    {
      <Image
        url={url}
        altText={altText}
        licenceType={licenceType}
        licenceUrl={licenceUrl}
        attributionName={attributionName}
        attributionUrl={attributionUrl}
      />
    }
  </div>
);

export default Card;
