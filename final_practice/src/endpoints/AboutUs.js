import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div class="AboutUsSection">
      <h2>DISCOVER OUR TEAM</h2>
      <div class="AboutUsSection__Team">
        <div class="AboutUsSection__Team--person">
          <img
            src="/images/guillermo.webp"
            width="200px"
            height="200px"
            alt="Imagen desarrollador Guillermo"
          ></img>
          <div class="person-details">
            <h4>GUILLERMO AZCONA</h4>
            <p>BookRealm developer. The React interaction student focuses on creating interactive and dynamic components using React. He is responsible for developing the user interface logic, managing the application's state, and ensuring a smooth user experience. They work closely with the design and development team to integrate their components into the web project.</p>
          </div>
        </div>
        <div class="AboutUsSection__Team--person">
          <img
            src="/images/eduardo.webp"
            width="200px"
            height="200px"
            alt="Imagen desarrollador Eduardo"
          ></img>
          <div class="person-details">
            <h4>EDUARDO EZPONDA</h4>
            <p>Bookrealm developer. The SEO student is responsible for optimizing the website's content to improve its visibility in search engines. His work includes keyword research, meta tag optimization, and creating link-building strategies to increase organic traffic to the site.</p>
          </div>
        </div>
        <div class="AboutUsSection__Team--person">
          <img
            src="/images/helen.webp"
            width="200px"
            height="200px"
            alt="Imagen desarrollador Helen"
          ></img>
          <div class="person-details">
            <h4>HELEN PORTUONDO</h4>
            <p>Bookrealm developer. The design student specializes in the visual design and usability of the website. She works on creating attractive and functional interfaces, focusing on user experience. They use design tools such as Figma to create prototypes and collaborate closely with the development team to implement their designs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
