import { useEffect } from "react";
import Aos from "aos";
import Icons from "./Icons";

function CtaBand() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <section className="w-full py-20 px-4 flex justify-center">
      <div
        className="relative overflow-hidden glass rounded-3xl max-w-5xl w-full px-6 py-16 sm:py-20 flex flex-col items-center text-center"
        data-aos="fade-up"
      >
        <div
          className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] max-w-full bg-glcrvena/20 blur-[130px] rounded-full pointer-events-none"
          aria-hidden="true"
        ></div>
        <h2 className="relative z-10 text-4xl sm:text-6xl font-bold uppercase tracking-wide text-bela">
          Spreman da se <span className="text-glcrvena glow-text">pridružiš</span>?
        </h2>
        <p className="relative z-10 text-bela/70 text-lg sm:text-xl mt-4 max-w-xl">
          Uđi na naš Discord i postani deo Scorpions Legion zajednice.
        </p>
        <a
          href="https://discord.gg/hcbMShPYJ8"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg text-lg sm:text-xl font-display font-bold uppercase tracking-wider bg-plava text-bgdark transition-all duration-300 hover:shadow-glow-blue active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bela"
        >
          <Icons ikonice="discord" stilovi="text-2xl sm:text-3xl" />
          Udji na Discord
        </a>
      </div>
    </section>
  );
}

export default CtaBand;
