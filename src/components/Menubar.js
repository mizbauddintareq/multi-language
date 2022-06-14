import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "ar", text: "Arabic" },
  { value: "bn", text: "Bengali" },
  { value: "hi", text: "Hindi" },
  { value: "ta", text: "Tamil" },
  { value: "es", text: "Spanish" },
];
const Menubar = () => {
  const { t } = useTranslation();

  const [lang, setLang] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  return (
    <div>
      <h1>{t("Welcome")}</h1>
      <label>{t("Choose")}</label>

      <select value={lang} onChange={handleChange}>
        {languages.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Menubar;
