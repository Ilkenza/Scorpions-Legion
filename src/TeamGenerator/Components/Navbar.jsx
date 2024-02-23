import { Link, useLocation } from "react-router-dom";
import Icons from "../../Home/Components/Icons";
import Links from "../../Home/Components/Links";
import { useEffect, useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.overflow = "hidden";
      console.log("v")
    } else {
      document.body.style.overflow = "visible";
      console.log("h")
    }
  }, [location]);

  const handleClick = () => {
    if (!click) {
      setClick(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
      setClick(false);
    }
  };

  const handleLinkClick = () => {
    document.body.style.overflow = "visible";
  };


  const changebg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setClick(false);
      document.body.style.overflow = "visible";
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changebg);
    return () => {
      window.removeEventListener("scroll", changebg);
    };
  }, []);

  const desktopLinkStyles =
    "cursor-pointer hover:text-glcrvena text-bela transition-all ease-linear duration-100 hidden md:flex";
  const mobileLinkStyles =
    "cursor-pointer font-bold hover:text-glcrvena my-5 transition-all ease-linear duration-100 text-bela";
  const socialMediaIconsStyles = "m-4 text-3xl";
  const socialMediaLinksStyles =
    "text-bela hover:text-glcrvena transition-all ease-linear duration-100";

  const contentClasses = `md:hidden items-center flex flex-col h-screen justify-evenly transform ${
    click
      ? "animate__animated animate__slideInRight bg-[#171717]"
      : "animate__animated animate__slideOutRight bg-[#171717] duration-1000 ease-in-out"
  } transition-transform duration-300 ease-in-out`;
  return (
    <header
      className={`fixed top-0 w-full z-10 ${click ? "h-screen" : "h-24"}`}>
      <nav
        className={`flex items-center justify-evenly w-full font-bold text-xl ${
          navbar
            ? "bg-[#171717] border-b-[0.01rem] border-glcrvena backdrop-blur z-10 duration-100"
            : "duration-100"
        } ${
          click
            ? "bg-[#171717] border-b-[0.01rem] border-glcrvena backdrop-blur z-10"
            : "bg-transparent"
        }`}>
        <Link className={desktopLinkStyles} to="/" >
          Pocetna
        </Link>
        <Links linkov="logo" stil="w-[4rem]" />
        <div className="hidden md:flex my-5">
          <a
            href="https://discord.gg/hcbMShPYJ8"
            target="blank"
            className={socialMediaLinksStyles}>
            <Icons ikonice="discord" stilovi={socialMediaIconsStyles} />
          </a>
          <a
            href="https://www.instagram.com/scorpionslegion"
            target="blank"
            className={socialMediaLinksStyles}>
            <Icons ikonice="instagram" stilovi={socialMediaIconsStyles} />
          </a>
          <a
            href="https://steamcommunity.com/groups/scorpionslegion"
            target="blank"
            className={socialMediaLinksStyles}>
            <Icons ikonice="steam" stilovi={socialMediaIconsStyles} />
          </a>
          <a
            href="https://www.tiktok.com/@scorpionslegion"
            target="blank"
            className={socialMediaLinksStyles}>
            <Icons ikonice="tiktok" stilovi={socialMediaIconsStyles} />
          </a>
        </div>
        <button className="block md:hidden transition" onClick={handleClick}>
          {click ? (
            <Icons ikonice="close" stilovi="text-4xl text-glcrvena" />
          ) : (
            <Icons ikonice="menu" stilovi="text-4xl text-glcrvena" />
          )}
        </button>
      </nav>
      <div className={`animate-content-show ${contentClasses}`}>
        <div className="text-3xl items-center inline-flex w-full flex-col">
          <Link className={mobileLinkStyles} to="/" onClick={handleLinkClick}>
            Pocetna
          </Link>
          <div className="md:hidden flex my-5">
            <a
              href="https://discord.gg/hcbMShPYJ8"
              target="blank"
              className={socialMediaLinksStyles}>
              <Icons ikonice="discord" stilovi={socialMediaIconsStyles} />
            </a>
            <a
              href="https://www.instagram.com/scorpionslegion"
              target="blank"
              className={socialMediaLinksStyles}>
              <Icons ikonice="instagram" stilovi={socialMediaIconsStyles} />
            </a>
            <a
              href="https://steamcommunity.com/groups/scorpionslegion"
              target="blank"
              className={socialMediaLinksStyles}>
              <Icons ikonice="steam" stilovi={socialMediaIconsStyles} />
            </a>
            <a
              href="https://www.tiktok.com/@scorpionslegion"
              target="blank"
              className={socialMediaLinksStyles}>
              <Icons ikonice="tiktok" stilovi={socialMediaIconsStyles} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
