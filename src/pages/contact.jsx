import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles/contact.scss";

import { HiOutlineMail } from "react-icons/hi";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="container contact-div">
      <div className="title">
        <h2>
          <span>/</span>
          {t("logoc")}
        </h2>
        <p>{t("cm")}</p>
      </div>
      <div className="content">
        <div className="text">
          <p>{t("textc")}</p>
        </div>
        <div className="cont">
          <h3>{t("ms")}</h3>
          <Link to="mailto:hosting0web258@gmail.com">
            <HiOutlineMail />
            <p className="gmail">hosting0web258@gmail.com</p>
          </Link>
          <Link to="https://t.me/foresstest">
            <BsTelegram />
            <p>@foresstest</p>
          </Link>
        </div>
      </div>
      <div className="media">
        <div className="logom">
          <h2>
            <span>#</span>
            {t("al")}
          </h2>
        </div>
        <div className="link">
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Contact;
