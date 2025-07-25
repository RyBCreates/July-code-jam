import LinkedIn from "../../assets/icons/linkedin-dark.svg";
import GitHub from "../../assets/icons/github-dark.svg";

import "./Socials.css";

function Socials({ linkedin, github }) {
  return (
    <>
      <li className="socials__list-item">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="socials__link"
        >
          <img src={LinkedIn} alt="LinkedIn" className="socials__icon" />
        </a>
      </li>
      <li className="socials__list-item">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="socials__link"
        >
          <img src={GitHub} alt="Github" className="socials__icon" />
        </a>
      </li>
    </>
  );
}

export default Socials;
