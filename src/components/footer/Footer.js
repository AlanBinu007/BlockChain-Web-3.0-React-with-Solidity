import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
        No Copyright © Issue<br/>
        Fell Free To Copy. Ping Me If You Need Help
        <br/>
        Design by Alan Binu 
        </p>
         
      </Fade>
    </div>
  );
}
