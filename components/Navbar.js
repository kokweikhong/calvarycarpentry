"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import navbarLogo from "../public/images/logo_navbar.png";

export default function Navbar() {
  const [isBurgerMenuClose, setIsBurgerMenuClose] = useState(false);
  const [isMenuOverlay, setIsMenuOverlay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    const hero = document.getElementById("hero");
    if (window.scrollY > hero.offsetHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function handleMenuToggle() {
    setIsBurgerMenuClose((current) => !current);
    setIsMenuOverlay((current) => !current);
  }

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setIsVisible(true);
    } else {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header id="header" className={`${isVisible ? "show" : ""}`}>
      <nav role="navigation">
        <div className="logo">
          <Image src={navbarLogo} alt=""></Image>
        </div>

        <div
          id="burger-menu"
          className={isBurgerMenuClose ? "close" : ""}
          onClick={handleMenuToggle}
        >
          <span></span>
        </div>

        <div id="menu" className={isMenuOverlay ? "overlay" : ""}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
