import { useEffect, useState } from "react";
import Icons from "./Icons";
import Stats from "./Stats";
import Aos from "aos";
import { Link } from "react-scroll";

function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease-out" });
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const primaryBtn =
    "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-lg sm:text-xl font-display font-bold uppercase tracking-wider bg-plava text-bgdark transition-all duration-300 hover:shadow-glow-blue active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bela";
  const secondaryBtn =
    "inline-flex items-center justify-center px-7 py-3 rounded-lg text-lg sm:text-xl font-display font-bold uppercase tracking-wider text-glcrvena border-2 border-glcrvena bg-glcrvena/5 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-glcrvena hover:text-bgdark hover:shadow-glow-red active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glcrvena";

  return (
    <>
      <div
        id="Pocetna"
        className="relative overflow-hidden bg-cover bg-no-repeat bg-center w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 pb-14 md:bg-desk-pocetna bg-mb-pocetna"
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-bgdark via-bgdark/60 to-bgdark/30"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] max-w-full bg-glcrvena/20 blur-[140px] rounded-full pointer-events-none animate-pulse-glow"
          aria-hidden="true"
        ></div>

        <div className="relative z-10 flex flex-col items-center" data-aos="fade-up">
          <span className="glass rounded-full px-4 py-1.5 text-xs sm:text-sm tracking-[0.3em] uppercase text-dcrvena mb-6">
            CS2 Gaming Community
          </span>
          <h1 className="text-6xl min-[420px]:text-7xl sm:text-8xl lg:text-[8.5rem] font-bold leading-[0.9] tracking-wide uppercase text-glcrvena glow-text">
            Scorpions<br className="hidden min-[420px]:block" /> Legion
          </h1>
          <p className="text-dcrvena text-lg sm:text-2xl mt-5 max-w-2xl">
            Zajednica za igru, druženje i takmičenje u CS2.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <a
              href="https://discord.gg/hcbMShPYJ8"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryBtn}
            >
              <Icons ikonice="discord" stilovi="text-2xl sm:text-3xl" />
              Udji na Discord
            </a>
            <Link to="Onama" spy={true} smooth={true} offset={-96} className={secondaryBtn}>
              Saznaj više
            </Link>
          </div>

          <div className="mt-12 w-full">
            <Stats />
          </div>
        </div>
      </div>

      <div
        className={`fixed right-6 sm:right-10 bottom-6 z-40 rounded-full bg-plava/80 backdrop-blur-sm shadow-glow-blue p-2 transition-opacity duration-300 ${
          showTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link spy={true} smooth={true} to="Pocetna" className="cursor-pointer flex">
          <Icons
            ikonice="upangle"
            stilovi="text-bela hover:text-glcrvena duration-300 ease-linear text-4xl sm:text-5xl cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}

export default Home;
