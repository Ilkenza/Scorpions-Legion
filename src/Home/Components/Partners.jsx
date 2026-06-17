import Aos from "aos";
import { useEffect } from "react";
import Icons from "./Icons";

function Partners() {
  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease-in-out" });
  }, []);

  // TODO: zameni placeholder partnere stvarnim imenima, logoima i linkovima.
  const partners = [
    { name: "Partner 1", url: "#" },
    { name: "Partner 2", url: "#" },
    { name: "Partner 3", url: "#" },
  ];

  return (
    <section
      id="Partneri"
      className="w-full min-h-screen flex flex-col justify-center items-center py-24 px-4 text-glcrvena"
    >
      <h3 className="text-[4rem] sm:text-[5rem] md:text-[6rem] font-bold" data-aos="fade-up">
        Partneri
      </h3>
      <div
        className="h-[0.5rem] w-[12rem] sm:w-[16rem] md:w-[20rem] bg-glcrvena mb-14"
        data-aos="fade-up"
      ></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] max-w-4xl">
        {partners.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 bg-[#1E1E1E] rounded-xl p-8 border-2 border-transparent hover:border-plava transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plava"
            data-aos="fade-up"
            data-aos-delay={i * 40}
          >
            <Icons ikonice="discord" stilovi="text-5xl text-plava" />
            <span className="text-bela font-bold text-lg">{p.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Partners;
