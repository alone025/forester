import "../pages/styles/home.scss";
import { useTranslation } from "react-i18next";
import { Head, PHome, SHome, AHome, CHome } from "./index";

const Home = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="container home_div">
      <Head />
      <div className="status">
        <h2>
          {" "}
          <span>“</span> {t("With great power comes great electricity bill")}{" "}
          <span>„</span>{" "}
        </h2>
        <h3>- Dr. Who</h3>
      </div>
      <PHome />
      <SHome />
      <AHome />
      <CHome />
    </div>
  );
};

export default Home;
