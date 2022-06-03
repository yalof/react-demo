import React, { useState } from "react";
import "./Information.css";
import HeaderMenu from "../../components/HeaderMenu";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import Button from "../../components/Button";

const Information = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const [tabName, setTabName] = useState("1");
  const activeTab = (i: string) => {
    setTabName(i);
  };
  const tabs = [
    { tabName: "Tab 1", id: "1" },
    { tabName: "Tab 2", id: "2" },
    { tabName: "Tab 3", id: "3" },
  ];
  const modelText = [
    "Это последний раунд и выбор не велик, Но джебы точны, будто бы их выбрал ювелир.",
    "Тени не исчезают в полдень, хроники врут, Первым падает тот, кто на словах вроде бы крут.",
    "Самое время собрать всю свою волю в кулак, Вам не удастся во мне запугать болью талант, Дать бой своим недостаткам - это дать бой системе, Если в твоём сердце есть место свету, не бойся тени!",
  ];

  return (
    <div
      className={classNames(
        { ["info-wrapper"]: isLightTheme },
        { [" info-wrapper dark"]: !isLightTheme }
      )}
    >
      <div className="info-wrap">
        <div className="info-title">Information</div>
        <div className="btnsInfo">
          {tabs.map((tab) => {
            return (
              <Button
                key={tab.id}
                className={classNames("btnInfo", {
                  ["btnInfo active-tabs"]: tab.id === tabName,
                })}
                btnText={tab.tabName}
                onClick={() => activeTab(tab.id)}
              />
            );
          })}
        </div>
        <div className="info-content-wrapper">
          <p>
            {tabName === "1"
              ? modelText[0]
              : tabName === "2"
              ? modelText[1]
              : modelText[2]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
