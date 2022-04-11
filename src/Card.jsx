import React from "react";
import "./Card.css";
import qr_img from "./assets/images/image-qr-code.png";
function Card() {
  return (
    <div className="card">
      <img src={qr_img} alt="qr_image" className="card-img" />
      <h1 className="card-title">
        Improve your frontend-skills by doing projects
      </h1>
      <p className="card-desc">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default Card;
