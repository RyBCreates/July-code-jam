import Ryan from "../../assets/images/developer-profiles/Ryan-Profile.jpg";
import Farida from "../../assets/images/developer-profiles/Farida-Profile.jpeg";
import Sohini from "../../assets/images/developer-profiles/Sohini-Profile.jpeg";
import Matthews from "../../assets/images/developer-profiles/Matthews-Profile.jpeg";
import Rawaa from "../../assets/images/developer-profiles/Rawaa-Profile.jpeg";

import "./DeveloperCard.css";

function DeveloperCard() {
  return (
    <>
      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img
            className="developer-card__image"
            src={Ryan}
            alt="Ryan Bommarito"
          />
          <h2 className="developer-card__name">Ryan Bommarito</h2>
          <p className="developer-card__type">Software Engineer</p>
          <p className="developer-card__bio">
            Filmmaker turned full-stack developer with a passion for
            storytelling—through film or code. I bring creativity and attention
            to detail to everything I build.
          </p>
          <a
            className="developer-card__linkedin"
            href="https://www.linkedin.com/in/ryan-bommarito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>
      </li>

      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img
            className="developer-card__image"
            src={Farida}
            alt="Farida Nelson"
          />
          <h2 className="developer-card__name">Farida Nelson</h2>
          <p className="developer-card__type">Software Engineer</p>
          <p className="developer-card__bio">
            Musician turned full-stack developer, I blend technical skill with
            creative energy. From building apps to composing songs, I love
            solving problems with originality.
          </p>
          <a
            className="developer-card__linkedin"
            href="https://www.linkedin.com/in/farida-nelson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>
      </li>

      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img
            className="developer-card__image"
            src={Matthews}
            alt="Matthews Jordao"
          />
          <h2 className="developer-card__name">Matthews Jordao</h2>
          <p className="developer-card__type">Software Engineer</p>
          <p className="developer-card__bio">
            Digital designer and software engineer passionate about building
            user-friendly, beautiful tools that make a real difference.
          </p>
          <a
            className="developer-card__linkedin"
            href="https://www.linkedin.com/in/matthewsjordao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>
      </li>

      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img
            className="developer-card__image"
            src={Sohini}
            alt="Sohini Tomar"
          />
          <h2 className="developer-card__name">Sohini Tomar</h2>
          <p className="developer-card__type">Data Scientist</p>
          <p className="developer-card__bio">
            Business strategist turned data scientist with a global perspective
            and passion for solving complex challenges through data.
          </p>
          <a
            className="developer-card__linkedin"
            href="https://www.linkedin.com/in/sohinitomar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>
      </li>

      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img
            className="developer-card__image"
            src={Rawaa}
            alt="Rawaa Yousseif"
          />
          <h2 className="developer-card__name">Rawaa Yousseif</h2>
          <p className="developer-card__type">Data Scientist</p>
          <p className="developer-card__bio">
            Geospatial expert and data scientist turning complex datasets into
            powerful, intuitive visualizations with Python and ML tools.
          </p>
          <a
            className="developer-card__linkedin"
            href="https://www.linkedin.com/in/rawaa-yousseif/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>
      </li>
    </>
  );
}

export default DeveloperCard;
