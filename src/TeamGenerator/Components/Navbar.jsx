import { Link } from "react-router-dom";
import Icons from "../../Home/Components/Icons";
import Links from "../../Home/Components/Links";
import { useEffect, useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

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
    setClick(false);
  };

  const changebg = () => {
    setNavbar(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", changebg);
    return () => {
      window.removeEventListener("scroll", changebg);
    };
  }, []);

  const linkStyle =
    "cursor-pointer text-bela hover:text-glcrvena transition-colors duration-200 font-display uppercase tracking-wider text-lg";
  const socialIcon = "text-3xl mx-3";
  const socialLink = "text-bela hover:text-glcrvena transition-colors duration-200";
  const discordCta =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-display font-bold uppercase tracking-wider text-base bg-plava/10 text-plava border border-plava transition-all duration-300 hover:bg-plava hover:text-bgdark hover:shadow-glow-blue";

  const contentClasses = `md:hidden items-center flex flex-col h-screen w-full justify-center gap-2 overflow-hidden bg-bgdark/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
    click ? "translate-x-0" : "translate-x-full"
  }`;

  return (
    <header className={`fixed top-0 w-full z-50 ${click ? "h-screen" : "h-24"}`}>
      <nav
        className={`flex items-center justify-between px-5 sm:px-8 lg:px-14 h-24 w-full transition-all duration-300 ${
          navbar
            ? "bg-bgdark/70 backdrop-blur-md border-b border-white/10 shadow-glow-soft"
            : click
            ? "bg-bgdark/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <Links linkov="logo" stil="w-14" />

        <div className="flex items-center gap-4">
          <Link to="/" className={`hidden md:inline-flex ${linkStyle}`}>
            Pocetna
          </Link>
          <a
            href="https://discord.gg/hcbMShPYJ8"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex ${discordCta}`}
          >
            <Icons ikonice="discord" stilovi="text-xl" />
            Discord
          </a>
          <button
            className="block md:hidden transition"
            onClick={handleClick}
            aria-label="Meni"
          >
            {click ? (
              <Icons ikonice="close" stilovi="text-4xl text-glcrvena" />
            ) : (
              <Icons ikonice="menu" stilovi="text-4xl text-glcrvena" />
            )}
          </button>
        </div>
      </nav>

      <div className={contentClasses}>
        <Link className={`my-3 text-3xl ${linkStyle}`} to="/" onClick={handleLinkClick}>
          Pocetna
        </Link>
        <a
          href="https://discord.gg/hcbMShPYJ8"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 text-xl px-6 py-3 ${discordCta}`}
        >
          <Icons ikonice="discord" stilovi="text-2xl" />
          Udji na Discord
        </a>
        <div className="flex mt-6">
          <a
            href="https://www.instagram.com/scorpionslegion"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLink}
          >
            <Icons ikonice="instagram" stilovi={socialIcon} />
          </a>
          <a
            href="https://steamcommunity.com/groups/scorpionslegion"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLink}
          >
            <Icons ikonice="steam" stilovi={socialIcon} />
          </a>
          <a
            href="https://www.tiktok.com/@scorpionslegion"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLink}
          >
            <Icons ikonice="tiktok" stilovi={socialIcon} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
