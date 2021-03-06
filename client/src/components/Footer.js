import React from "react";

const Footer = () => {
  const chief = (
    <a
      href="https://github.com/William-Cruz"
      target="_blank"
      rel="noopener noreferrer"
    >
      William Cruz
    </a>
  );
  const jake = (
    <a
      href="https://github.com/jwaltrip"
      target="_blank"
      rel="noopener noreferrer"
    >
      Jake Waltrip
    </a>
  );
  const sean = (
    <a
      href="https://github.com/SeanPhilippi"
      target="_blank"
      rel="noopener noreferrer"
    >
      Sean Philipi
    </a>
  );
  const zeke = (
    <a
      href="https://github.com/Zgutier5"
      target="_blank"
      rel="noopener noreferrer"
    >
      Zeke Gutierez
    </a>
  );

  return (
    <div className="container mt-5 mb-4">
      <hr />
      <div className="text-muted text-center footer">
        Created by:&nbsp; {chief}&nbsp; • &nbsp;{jake}&nbsp; • &nbsp;{sean}&nbsp; • &nbsp;{zeke} &nbsp;
        <i>for the </i> <span className="text-dark">ACA Slicknode Hackathon - Feb 2019</span>
      </div>
    </div>
  );
};

export default Footer;
