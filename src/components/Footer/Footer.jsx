import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>Created by FullyStacked team &copy; 2025 ColoRUSH</p>
        <nav>
          <Link to="/about">About</Link> | <Link to="/questions">FAQ</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
