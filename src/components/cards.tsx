import "../assets/styles/Cards.css";
import type { item } from "../types/interface";

export default function Cards({
  name,
  description,
  image,
  url,
  nameLink,
  secondImage,
  setIsOpen,
}: item) {
  const formattedDescription = (description ?? "").split("//").map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));


  return (
    <div className="card">
      <div className="nav-card">
        <h2>{name}</h2>
        <button
          type="button"
          className="button-close"
          onClick={() => (setIsOpen ? setIsOpen(false) : null)}
        >
          &#10007;
        </button>
      </div>
      <div className="main-card">
        {secondImage ? (
          <img src={secondImage} alt={secondImage} className="img-card" />
        ) : (
          <img src={image} alt={image} className="img-card" />
        )}
        <p className="description-card">{formattedDescription}</p>
      </div>
        {nameLink ? <a href={url} target="_blank" rel="noreferrer" className="link-button">
        {nameLink}
      </a> :  <button
          type="button"
          className="link-a-button"
          onClick={() => (setIsOpen ? setIsOpen(false) : null)}
        >
          Fermer
        </button>}
      
    </div>
  );
}
