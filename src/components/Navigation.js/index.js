import react from "react";
import "./Navigation.css";
import Typewriter from "typewriter-effect";
new Typewriter();
const Navigation = () => {
  return (
    <div className="navContainer">
      <div className="nav">
        <div className="logo"></div>
        <div className="subscription"></div>
      </div>
      <div className="navHeading">
        <div className="headingData">Welcome to Devesh Korde Blogs</div>
        <div className="line"></div>
        <div className="descriptionData">
          Hey pals! Glad you are here on my blog page. <br></br>This page serves
          you in
          <div style={{ fontWeight: "bold" }}>
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Coding Posts")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Technology Posts")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Code Snippets")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Projects Ideas")
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <div className="scroll"></div>
    </div>
  );
};

export default Navigation;
