import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const languageName = {
  en: "English",
  de: "German",
};

const languageClick = (e, language) => {
  e.preventDefault();
  changeLocale(language);
};

const Language = () => (
  <div>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map((language) => (
          <a
            key={language}
            onClick={(e) => languageClick(e, language)}
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",

              textDecoration: currentLocale === language ? `underline` : `none`,
              cursor: `pointer`,
            }}
            href="/"
          >
            {languageName[language]}
          </a>
        ))
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
