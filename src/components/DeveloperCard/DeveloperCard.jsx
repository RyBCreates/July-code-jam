import Socials from "../Socials/Socials";

import "./DeveloperCard.css";

function DeveloperCard({ name, image, type, bio, linkedin, github }) {
  return (
    <li className="developer-card">
      <div className="developer-card__wrapper">
        <img className="developer-card__image" src={image} alt={name} />
        <h2 className="developer-card__name">{name}</h2>
        <p className="developer-card__type">{type}</p>
        <p className="developer-card__bio">{bio}</p>
        <ul className="developer-card__socials">
          <Socials linkedin={linkedin} github={github} />
        </ul>
      </div>
    </li>
  );
}

export default DeveloperCard;
