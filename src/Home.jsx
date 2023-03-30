import React from "react";
import "./CSS/Home.css";
import ProfilePic from "./images/portrait.jpg";

function Home() {
  return (
    <div className="mainGrid">
      <div class="box_group">
        <div id="homepres">
          <h2>Junior Developer</h2>
          <h1>Petter Boström</h1>
          <h3>based in Varberg, Sweden</h3>
        </div>
        <div>
          <img
            id="portrait"
            src={ProfilePic}
            alt="portrait of Petter Boström"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
