import "./styles/cHome.scss";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelegram } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const CHome = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="chome-div">
      <div className="logo-chome">
        <h2>
          <span>#</span>
          {t("logoc")}
        </h2>
        <div className="line10"></div>
      </div>
      <div className="content-chome">
        <div className="left-section">
          <p>{t("textc")}</p>
        </div>
        <div className="right-section">
          <label htmlFor="links">{t("ms")}</label>
          <Link to="mailto:hosting0web258@gmail.com">
            <div className="gmail li">
              <HiOutlineMail />
              <p>hosting0web258@gmail.com</p>
            </div>
          </Link>
          <Link to="https://t.me/foresstest">
            <div className="telegram li">
              <BsTelegram />
              <p>@foresstest</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CHome;
