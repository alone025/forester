import "./styles/about.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="container about-div">
      <div className="title">
        <h2>
          <span>/</span>
          {t("about")}
        </h2>
        <p>Who am i?</p>
      </div>
      <div className="content1 c">
        <div className="left-1">
          <h3>{t("logo")}</h3>
          <p>{t("text1")} </p>
          <p>{t("text2")}</p>
        </div>
        <div className="right-1">
          <img
            src="https://github.com/alone025/Animated_picture/assets/127105897/40ca4cd5-5a4d-4895-ae88-956b69047740"
            alt="my-pic"
          />
        </div>
      </div>
      <div className="content2 c">
        <div className="logo-2 l">
          <h2>
            <span>#</span>
            {t("skills")}
          </h2>
        </div>
        <div className="content-2">
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
      <div className="content3 c">
        <div className="logo-3 l">
          <h2>
            <span>#</span>my-fun-facts
          </h2>
        </div>
        <div className="content-3">
          <div className="left-3">
            <p>I like winter and autumn</p>
            <p>I often listen music</p>
            <p>I like hot dog and palov</p>
            <p>I've been on Jizzakh and Bustonlik</p>
            <p>I like work with team</p>
            <p>I am still in school</p>
            <p>I have a sibling</p>
          </div>
          <div className="right-3">
            <img
              src="https://github.com/alone025/Animated_picture/assets/127105897/91a5c4b4-7307-49ae-87fd-c8e14ef81636"
              alt="shakl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
