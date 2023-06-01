import "./styles/sHome.scss";
import { useTranslation } from "react-i18next";

const SHome = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="shome_div">
      <div className="logo-shome">
        <h2>
          <span>#</span>
          {t("skills")}
        </h2>
        <div className="line"></div>
      </div>
      <div className="content-shome">
        <div className="left-section-">
          <img
            src="https://github.com/alone025/Animated_picture/assets/127105897/ccede694-07b7-4ad5-8f9a-58b8ce093120"
            alt="logo"
          />
        </div>
        <div className="-right-section">
          <div className="first-card cards">
            <h2>{t("Languages")}</h2>
            <p>Vue JS React HTML CSS SCSS</p>
          </div>
          <div className="second-card">
            <div className="cards">
              <h2>{t("Databases")}</h2>
              <p>SQL Django</p>
            </div>
            <div className="cards">
              <h2>{t("Other")}</h2>
              <p>HTML CSS SCSS EJS</p>
            </div>
          </div>
          <div className="third-card">
            <div className="cards">
              <h2>{t("Tools")}</h2>
              <p>Vscode Figma Font Awesome Design Git</p>
            </div>
            <div className="cards">
              <h2>{t("Frameworks")}</h2>
              <p>React Vue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SHome;
