import React from 'react'

const AboutKonradContent = ({lang}) => {
  return (
    <>
            <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph2}</p>
            <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph3}</p>
            <ul className="mt-3">
              {lang.about_konrad_festivals.map((el, i) => (
                <li key={i}>- {el}</li>
              ))}
            </ul>
            <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph4}</p>
          </>
  )
}

export default AboutKonradContent
