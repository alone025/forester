import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./styles/footer.scss";

import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { SiOpencollective } from "react-icons/si";

const Footer = () => {
  const { t } = useTranslation(["footer"]);

  return (
    <div className="footer_div">
      <div className="top-section">
        <div className="text-tip">
          <div className="logo-tip">
            <Link to="/">
              <img
                src="https://github.com/alone025/Animated_picture/assets/127105897/c8dec87b-abfd-4c19-bd55-f4cec380d3c8"
                alt=""
              />
              <h2>Forester</h2>
            </Link>
            <Link to="mailto:hosting0web258@gmail.com">
              <p>hosting0web258@gmail.com</p>
            </Link>
          </div>
          <div className="p-tip">
            <p>{t("pt")}</p>
          </div>
        </div>
        <div className="link-tip">
          <div className="logo">
            <h3>{t("m")}</h3>
          </div>
          <Link to="https://github.com/alone025">
            <BsGithub />
          </Link>
          <Link to="https://t.me/foresstest">
            <BsTelegram />
          </Link>
          <Link to="https://opencollective.com/forester">
            <SiOpencollective />
          </Link>
        </div>
      </div>
      <div className="bottom-section">
        <h3>© Copyright 2023. Made by Forester</h3>
      </div>
    </div>
  );
};

export default Footer;
