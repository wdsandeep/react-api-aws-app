import React, { useState, useEffect } from "react";
// import welcomeGalleryData from "./data/welcome_gallery.json";
function Welcome() {
  const [welcomeGalleryData, setWelcomeGalleryData] = useState([]);

  const getGalleryImages = async () => {
    const respImages = await fetch(
      "https://mf7llnmppf.execute-api.us-east-1.amazonaws.com/Production/gallery_images"
    );
    const jsonImages = await respImages.json();
    // console.log(jsonImages);
    setWelcomeGalleryData(jsonImages);
  };

  useEffect(() => {
    // call gallery data function
    getGalleryImages();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {welcomeGalleryData.map((item) => (
            <img
              key={Math.random()}
              src={item.src}
              alt={item.alt}
              className={item.class}
            />
          ))}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
}

export default Welcome;
