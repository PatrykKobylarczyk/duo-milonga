import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ActiveSelectorsGroup = ({selectedPage, setSelectedPage}) => {
  
    const selectedStyle = `relative before:rounded before:bg-red before:absolute before:w-2 before:h-10 before:right-[50%]
    `;
  

    return (
    <div className="flex flex-col gap-y-0.5 fixed top-[60%] right-7">
      <AnchorLink
        className={`${selectedPage === 'home' ? selectedStyle : "bg-black"}
        w-1/4 h-10`}
        to='#home'
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        className={`${selectedPage === 'skills' ? selectedStyle : "bg-black"}
        w-1/4 h-10`}
        to='#skills'
        onClick={() => setSelectedPage('skills')}
      />
      <AnchorLink
        className={`${selectedPage === 'projects' ? selectedStyle : "bg-black"}
        w-1/4 h-10`}
        to='#projects'
        onClick={() => setSelectedPage('projects')}
      />
      <AnchorLink
        className={`${selectedPage === 'testimonials' ? selectedStyle : "bg-black"}
        w-1/4 h-10`}
        href='#testimonials'
        onClick={() => setSelectedPage('testimonials')}
      />
      <AnchorLink
        className={`${selectedPage === 'contact' ? selectedStyle : "bg-black"}
        w-1/4 h-10`}
        to='#contact'
        onClick={() => setSelectedPage('contact')}
      />
    </div>
  )
}

export default ActiveSelectorsGroup
