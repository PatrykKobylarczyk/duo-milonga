import React from "react";

const AboutDuoContent = ({ lang }) => {
  return (
    <>
      <p className="mt-12">{lang.about_description_paragraph2}</p>
      <ul className="mt-3">
        {lang.about_description_paragraph_festivals.map((el, i) => (
          <li key={i} className="">
            - {el}
          </li>
        ))}
      </ul>
      <p className="mt-12">{lang.about_description_paragraph3}</p>
      <p className="mt-12">{lang.about_description_paragraph4}</p>
      <p className="mt-12">{lang.about_description_paragraph5}</p>
      <p className="mt-12">{lang.about_description_paragraph6}</p>
    </>
  );
};

export default AboutDuoContent;
