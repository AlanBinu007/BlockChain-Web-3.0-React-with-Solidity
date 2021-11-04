import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    document.addEventListener("mousemove", function (e) {
      var body = document.querySelector("body");
      var heart = document.createElement("span1");
      var x = e.offsetX;
      var y = e.offsetY;
      heart.style.left = x + "px";
      heart.style.top = y + "px";
      var size = Math.random() * 100;
      heart.style.width = 20 + size + "px";
      heart.style.height = 20 + size + "px";
      if (
        window.location.href == "https://alanbinu-portfolio.web.app/#/" ||
        window.location.href == "https://alanbinu-portfolio.web.app/#/splash"
      ) {
        body.appendChild(heart);
      }
      // if(window.location.href=="http://localhost:3000/#/" || window.location.href=="http://localhost:3000/#/splash"){
      //   body.appendChild(heart);
      // }
      setTimeout(function () {
        heart.remove();
      }, 2000);
    });

    const theme = this.props.theme;
    return (
      <>
        <div id="text">
          <span>No Matter How Hard It Is ,</span> Just Keep Going
        </div>
        <div class="loader"></div>
      </>
    );
  }
}

export default LogoLoader;
