import React from "react";
import "./styles/project.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="container project-div">
      <div className="title">
        <h2>
          <span>/</span>
          {t("projects")}
        </h2>
        <p>{t("pt1")}</p>
      </div>
      <div className="complate-apps a">
        <div className="logo-c l">
          <h2>
            <span>#</span>
            {t("pt2")}
          </h2>
        </div>
        <div className="content-c c">
          <div className="card">
            <img
              src="https://github.com/alone025/Animated_picture/assets/127105897/cfebfd7b-f432-4518-a3d2-bb2eb64885f5"
              alt="logo"
            />
            <p>Html SCSS</p>
            <h2>ChertNodes</h2>
            <h3>Minecraft servers hosting </h3>
            <div className="inputs">
              <Link to="#">
                <input type="button" value="Live <~>" />
                <input type="button" value="Cached >=" />
              </Link>
            </div>
          </div>
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
        </div>
      </div>
      <div className="small-apps a">
        <div className="logo-s l">
          <h2>
            <span>#</span>
            {t("pt3")}
          </h2>
        </div>
        <div className="content-s c">
          <div className="card">
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
        </div>
      </div>
    </div>
  );
};

export default Project;
