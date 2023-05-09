import React from "react";
import { Navbar, Nav } from "react-bootstrap";



export default function Header() {
  return (
    <div>
     
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="logo-no-background.svg"
              height="90"
              alt=""
              loading="lazy"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
