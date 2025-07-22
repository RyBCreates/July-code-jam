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
            <a
              className="developer-card__linkedin"
              href="https://www.linkedin.com/in/ryan-bommarito/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </li>
      <li className="developer-card">
        <div className="developer-card__wrapper">
          <img
            className="developer-card__image developer-card__image_farida"
            src={Farida}
            alt="Farida Nelson"
          ></img>
          <h2 className="developer-card__name">Farida Nelson</h2>
          <p className="developer-card__type">Software Engineer</p>
          <p className="developer-card__bio">
            Founder of Farida Nelson Music LLC and leader of a Jazz Rock Fusion
            Trio turned full-stack developer, I blend technical skill with
            artistic vision. Whether I'm building an app or composing a setlist,
            I bring innovation, precision, and a passion for creativity to every
            project I take on.
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
            className="developer-card__image developer-card__image_matthews"
            src={Matthews}
            alt="Matthews Jordao"
          ></img>
          <h2 className="developer-card__name">Matthews Jordao</h2>
          <p className="developer-card__type">Software Engineer</p>
          <p className="developer-card__bio">This is the bio</p>
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
            className="developer-card__image developer-card__image_sohini"
            src={Sohini}
            alt="Sohini Das"
          ></img>
          <h2 className="developer-card__name">Sohini Tomar</h2>
          <p className="developer-card__type">Data Scientist</p>
          <p className="developer-card__bio">
            Sohini Tomar Data Scientist, Seasoned business professional with
            strong analytical skills turned data scientist, blending strategic
            insight with a passion for cross-functional collaboration. I bring
            global experience and a results-driven mindset to uncover
            data-driven solutions that create impact.
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
            className="developer-card__image developer-card__image_rawaa"
            src={Rawaa}
            alt="Rawaa Youssief"
          ></img>
          <h2 className="developer-card__name">Rawaa Yousseif</h2>
          <p className="developer-card__type">Data Scientist</p>
          <p className="developer-card__bio">
            Data Scientist with a background in agricultural science,
            specializing in geospatial analysis, machine learning, and
            interactive visualizations. I use tools like Python, Jupyter,
            Folium, and Plotly to turn complex data into clear, actionable
            insights.
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
