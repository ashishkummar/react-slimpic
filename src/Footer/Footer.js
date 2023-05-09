import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          © {new Date().getFullYear()} Copyright:  
          <a className="text-dark" href="#">
              slimPic.com
          </a>
        </div> 
      </footer>
    </div>
  );
}
