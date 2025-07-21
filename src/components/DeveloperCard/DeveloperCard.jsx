import Ryan from "../../assets/images/developer-profiles/Ryan-Profile.jpg";
import "./DeveloperCard.css";

function DeveloperCard() {
  return (
    <>
      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img
            className="developer-card__image developer-card__image_ryan"
            src={Ryan}
            alt="Ryan Bommarito"
          ></img>
          <div className="developer-card__text">
            <h2 className="developer-card__name">Ryan Bommarito</h2>
            <p className="developer-card__type">Software Engineer</p>
            <p className="developer-card__bio">
              Filmmaker turned full-stack developer with a passion for
              storytelling, whether it's through a lens or a line of code. I
              bring creativity, collaboration, and an eye for detail to every
              project I build.
            </p>
          </div>
        </div>
      </li>
      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img className="developer-card__image"></img>
          <h2 className="developer-card__name">Farida</h2>
          <p className="developer-card__type">Software Engineer</p>
          <p className="developer-card__bio">This is the bio</p>
        </div>
      </li>
      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img className="developer-card__image"></img>
          <h2 className="developer-card__name">Matthews</h2>
          <p className="developer-card__type">Software Engineer</p>
          <p className="developer-card__bio">This is the bio</p>
        </div>
      </li>
      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img className="developer-card__image"></img>
          <h2 className="developer-card__name">Sohini</h2>
          <p className="developer-card__type">Data Scientist</p>
          <p className="developer-card__bio">This is the bio</p>
        </div>
      </li>
      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img className="developer-card__image"></img>
          <h2 className="developer-card__name">Rawaa</h2>
          <p className="developer-card__type">Data Scientist</p>
          <p className="developer-card__bio">This is the bio</p>
        </div>
      </li>
    </>
  );
}

export default DeveloperCard;
