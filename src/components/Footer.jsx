import React from "react";

function Footer() {
    return (
      <footer>
        <p>©PSP NOTES APP {new Date().getFullYear()}</p>
        <p>
          Made with ❤ by{" "}
          <a
            href="https://praneethpsp.github.io/Praneeth-s-Portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            Praneeth
          </a>
        </p>
      </footer>
    );
 
}

export default Footer;
