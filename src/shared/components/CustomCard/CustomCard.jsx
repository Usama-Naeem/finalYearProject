// CardComponent.js
import React from "react";
import "./cardComponent.css"; // Create a separate CSS file to handle the styles

const CardComponent = ({ imageUrl, title, description }) => (
  <figure className="snip1577">
    <img src={imageUrl} alt={title} />
    <figcaption>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </figcaption>
    <a href="#"></a>
  </figure>
);

export default CardComponent;
