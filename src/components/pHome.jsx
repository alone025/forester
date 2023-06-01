import { Link } from "react-router-dom";
import "../components/styles/pHome.scss";
import { useTranslation } from "react-i18next";

const PHome = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="project-home">
      <div className="logo-ph">
        <div className="text">
          <h2>
            <span>#</span>
            {t("projects")}
          </h2>
          <div className="line"></div>
        </div>
        <div className="link">
          <Link to="/works">
            <h3>{t("View all ~~>")}</h3>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <img
            src="https://github.com/alone025/Animated_picture/assets/127105897/cfebfd7b-f432-4518-a3d2-bb2eb64885f5"
            alt="logo"
          />
          <p>Html SCSS</p>
          <h2>ChertNodes</h2>
          <h3>Minecraft servers hosting </h3>
          <div className="inputs">
            <Link to="/">
              <input type="button" value="Live <~>" />
              <input type="button" value="Cached >=" />
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://github.com/alone025/Animated_picture/assets/127105897/00095195-f236-4f57-8336-7b70495f9b6a"
            alt="logo"
          />
          <p>React JS SCSS Vue</p>
          <h2>ProtectX</h2>
          <h3>Discord anti-crash bot</h3>
          <div className="inputs">
            <Link to="/">
              {" "}
              <input type="button" value="Live <~>" />
            </Link>
            {/* <input type="button" value="Cached >=" /> */}
          </div>
        </div>
        <div className="card">
          <img
            src="https://github.com/alone025/Animated_picture/assets/127105897/f82ab2fc-ea6d-4f7d-9cff-31a82139c4f1"
            alt="logo"
          />
          <p>React JS CSS</p>
          <h2>Kahoot Answers Viewer</h2>
          <h3>Get answers to your kahoot quiz</h3>
          <div className="inputs">
            <Link to="/">
              <input type="button" value="Live <~>" />
            </Link>
            {/* <input type="button" value="Cached >=" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PHome;
