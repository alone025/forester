import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./styles/aHome.scss";

const AHome = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="ahome-div">
      <div className="logo-ahome">
        <h2>
          <span>#</span>
          {t("about")}
        </h2>
        <div className="line8"></div>
      </div>
      <div className="content-ahome">
        <div className="left-section">
          <h3>{t("logo")}</h3>
          <p>{t("text1")} </p>
          <p>{t("text2")}</p>
          <Link to="/about">
            <input type="button" value={t("more")} />
          </Link>
        </div>
        <div className="right-section">
          <img
            src="https://github.com/alone025/Animated_picture/assets/127105897/40ca4cd5-5a4d-4895-ae88-956b69047740"
            alt="my-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default AHome;
