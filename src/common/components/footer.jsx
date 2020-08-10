import React from "react";

const Footer = () => {
  const styleIcon = {
    fontSize: "1.5rem",
    color: "#eee",
    marginRight: "15px",
    cursor: "pointer",
  };
  return (
    <footer className="footer">
      <div>@NbaApp by Gekko</div>
      <div className="mt-3">
        <i className="fa fa-twitter" style={styleIcon}></i>
        <i className="fa fa-facebook-square" style={styleIcon}></i>
        <i className="fa fa-user" style={styleIcon}></i>
      </div>
    </footer>
  );
};

export default Footer;
