import { useEffect } from "react";
import Icons from "./Icons";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionHeader from "../../Common/SectionHeader";

const owners = [
  {
    name: "Ilkenza",
    role: "Osnivač",
    avatar: "bg-ilkenza-logo",
    socials: [
      { icon: "instagram", url: "https://www.instagram.com/ilija03k_/" },
      { icon: "steam", url: "https://steamcommunity.com/id/ilkenza" },
      { icon: "twitter", url: "https://twitter.com/Ilkenza1" },
    ],
  },
  {
    name: "Nesko",
    role: "Osnivač",
    avatar: "bg-nesko-logo",
    socials: [
      { icon: "instagram", url: "https://www.instagram.com/nebojsaninkovv/" },
      { icon: "steam", url: "https://steamcommunity.com/id/neskojebre" },
      { icon: "twitter", url: "https://twitter.com/pb_mootivation" },
    ],
  },
];

function Owners() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const socialBtn =
    "w-12 h-12 flex items-center justify-center rounded-xl glass text-plava text-2xl transition-all duration-300 hover:text-bela hover:border-plava hover:shadow-glow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plava";

  return (
    <div
      id="Vlasnici"
      className="min-h-screen flex justify-center items-center flex-col font-bold py-24 px-4"
    >
      <SectionHeader eyebrow="Iza servera" title="Vlasnici" />
      <div
        className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center"
        data-aos="fade-up"
      >
        {owners.map((owner) => (
          <div
            key={owner.name}
            className="glass glass-hover rounded-3xl p-8 flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="relative mb-6">
              <div
                className="absolute inset-0 rounded-full bg-glcrvena/30 blur-2xl"
                aria-hidden="true"
              ></div>
              <div
                className={`relative ${owner.avatar} bg-cover rounded-full border-2 border-glcrvena/60 h-[12rem] w-[12rem] sm:h-[14rem] sm:w-[14rem]`}
              ></div>
            </div>
            <h3 className="text-4xl sm:text-5xl text-bela">{owner.name}</h3>
            <span className="text-glcrvena uppercase tracking-[0.2em] text-sm mt-1 mb-5">
              {owner.role}
            </span>
            <div className="flex gap-3">
              {owner.socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialBtn}
                  aria-label={s.icon}
                >
                  <Icons ikonice={s.icon} stilovi="" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Owners;
