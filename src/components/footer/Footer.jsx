import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <img src="./images/logo.svg" alt="" className="logo" />
      <div className="info">
        <div className="locationText">
          <FontAwesomeIcon icon={faLocationPin} />
          <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
          </p>
        </div>
        <div className="phoneEmail">
            <span>
            <FontAwesomeIcon icon={faPhone} />
            +1-543-123-456
            </span>
            <span>
            <FontAwesomeIcon icon={faEnvelope} />
            example@fylo.com
            </span>
        </div>
        <div className="footerNav">
            <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Jobs</li>
                <li>Terms</li>
                <li>Press</li>
                <li>Privacy</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="socialMedia">
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};
