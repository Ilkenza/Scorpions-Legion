import { useState, useEffect } from "react";
import Links from "./Links";
import Icons from "./Icons";


function Nav() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if(click){
      document.body.style.overflow = "visible"
    }else{
      document.body.style.overflow = "hidden"
    }
  }
  const changebg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
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

  const cn =
    "cursor-pointer hover:text-glcrvena text-bela transition-all ease-linear duration-100 hidden md:flex";
  const nb =
    "cursor-pointer font-bold hover:text-glcrvena my-5 transition-all ease-lenear duration-100 text-bela";
    const micons = "m-4 text-3xl";
  const mstilovi = "hover:text-hcrvena transition-all ease-linear duration-100";
  const contentClasses = `md:hidden items-center flex flex-col bg-bgsiva h-screen justify-evenly transform ${
    click ? "scale-y-100" : "scale-y-0"
  } transition-transform duration-300 ease-in-out`;
    const content = (
    <div className={contentClasses}>
      <div className="text-3xl items-center inline-flex w-full flex-col">
      <Links linkov="pocetna" stil={nb} />
      <Links linkov="onama" stil={nb} />
      <Links linkov="vlasnici" stil={nb} />
      <Links linkov="faq" stil={nb} />
      </div>
      <div
      className="text-glcrvena md:hidden flex my-5">
      <a
        href="https://discord.gg/hcbMShPYJ8"
        target="blank"
        className={mstilovi}>
        <Icons ikonice="discord" stilovi={micons} /></a>
      <a
        href="https://www.instagram.com/scorpionslegion"
        target="blank"
        className={mstilovi}>
        <Icons ikonice="instagram" stilovi={micons} />
      </a>
      <a
        href="https://steamcommunity.com/groups/scorpionslegion"
        target="blank"
        className={mstilovi}>
        <Icons ikonice="steam" stilovi={micons} />
      </a>
      <a
        href="https://www.tiktok.com/@scorpionslegion"
        target="blank"
        className={mstilovi}>
        <Icons ikonice="tiktok" stilovi={micons} />
      </a>
    </div>
    </div>
  );

  const headerStyle = {
    background: click ? "#171717" : "",
  };
  return (
    <header
    className={`fixed top-0 w-full z-10 ${navbar ? "bg-[#171717b3] border-b-[0.01rem] border-glcrvena backdrop-blur z-10" : ""}`}
    style={headerStyle}
  >
      <nav className=" flex items-center justify-evenly w-full font-bold text-xl">
        <Links linkov="pocetna" stil={cn} />
        <Links linkov="onama" stil={cn} />
        <Links linkov="logo" stil="w-[6rem]" />
        <Links linkov="vlasnici" stil={cn} />
        <Links linkov="faq" stil={cn} />
        <button className="block md:hidden transition" onClick={handleClick}>
          {click ? (
            <Icons ikonice="close" stilovi="text-4xl text-glcrvena"/>
          ) : (
            <Icons ikonice="menu" stilovi="text-4xl text-glcrvena" />
          )}
        </button>
      </nav>
        {click && content}
    </header>
  );
}

export default Nav;

