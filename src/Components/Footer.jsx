// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer
      className=" text-light text-center py-3 mt-4"
      style={{
        background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
      }}
    >
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Cuppa Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
