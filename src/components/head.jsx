import "./styles/head.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Head = () => {
  const { t } = useTranslation(["head"]);

  return (
    <div className="things-head">
      <div className="left-section">
        <h2>
          {t("Forester is a")} <span>{t("web designer")} </span> {t("and")}{" "}
          <span> {t("front-end developer")}</span>
        </h2>
        <p>
          {t(
            "He crafts responsive websites where technologies meet creativity"
          )}
        </p>
        <Link to="/contact">
          <input type="button" value={t("Contact me!!")} />
        </Link>
      </div>
      <div className="right-section">
        <img
          src="https://github.com/alone025/Animated_picture/assets/127105897/9d919b05-db01-4ac0-a1c3-c75292e2a12a"
          alt="Programmer"
        />
        <h4>
          {" "}
          <span></span> Currently working on <span>Portfolio</span>
        </h4>
      </div>
    </div>
  );
};

export default Head;
