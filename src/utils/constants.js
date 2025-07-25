import Ryan from "../assets/images/developer-profiles/Ryan-Profile.jpg";
import Farida from "../assets/images/developer-profiles/Farida-Profile.jpeg";
import Sohini from "../assets/images/developer-profiles/Sohini-Profile.jpeg";
import Matthews from "../assets/images/developer-profiles/Matthews-Profile.jpeg";
import Rawaa from "../assets/images/developer-profiles/Rawaa-Profile.jpeg";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.colorush.serverpit.com/coloRUSH/api"
    : "http://localhost:3003/coloRUSH/api";

export const developers = [
  {
    name: "Ryan Bommarito",
    image: Ryan,
    type: "Software Engineer",
    bio: "Filmmaker turned full-stack developer with a passion for storytelling—through film or code. I bring creativity and attention to detail to everything I build.",
    linkedin: "https://www.linkedin.com/in/ryan-bommarito/",
    github: "https://github.com/RyBCreates",
  },
  {
    name: "Farida Nelson",
    image: Farida,
    type: "Software Engineer",
    bio: "Musician turned full-stack developer, I blend technical skill with creative energy. From building apps to composing songs, I love solving problems with originality.",
    linkedin: "https://www.linkedin.com/in/farida-nelson/",
    github: "https://github.com/FaridaNelson",
  },
  {
    name: "Matthews Jordao",
    image: Matthews,
    type: "Software Engineer",
    bio: "Digital designer and software engineer passionate about building user-friendly, beautiful tools that make a real difference.",
    linkedin: "https://www.linkedin.com/in/matthewsjordao/",
    github: "https://github.com/Matthews-Jordao",
  },
  {
    name: "Sohini Tomar",
    image: Sohini,
    type: "Data Scientist",
    bio: "Business strategist turned data scientist with a global perspective and passion for solving complex challenges through data.",
    linkedin: "https://www.linkedin.com/in/sohinitomar/",
    github: "https://github.com/sohini8328",
  },
  {
    name: "Rawaa Yousseif",
    image: Rawaa,
    type: "Data Scientist",
    bio: "Geospatial expert and data scientist turning complex datasets into powerful, intuitive visualizations with Python and ML tools.",
    linkedin: "https://www.linkedin.com/in/rawaa-yousseif/",
    github: "https://github.com/rawaayousseif",
  },
];
