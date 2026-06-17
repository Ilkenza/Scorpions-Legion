import Aos from "aos";
import { useEffect } from "react";
import Icons from "./Icons";
import SectionHeader from "../../Common/SectionHeader";

function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const features = [
    { icon: "gift", title: "Giveaway-i", desc: "Redovne nagradne igre za članove." },
    { icon: "trophy", title: "Fastcup", desc: "Povremeni turniri i takmičenja." },
    { icon: "coins", title: "Ekonomija", desc: "Razvijena ekonomija servera." },
    {
      icon: "palette",
      title: "Self-rolovi",
      desc: "Biraj igre, godine, boje, državu, pol i CS2 rankove.",
    },
    { icon: "handshake", title: "Partnerstva", desc: "Saradnja isključivo sa CS2 serverima." },
    { icon: "hashtag", title: "Tvoje sobe", desc: "Pravljenje i editovanje sopstvenih soba." },
  ];

  return (
    <section
      id="Onama"
      className="relative bg-cover bg-no-repeat bg-center w-full min-h-screen flex flex-col justify-center items-center py-24 px-4 md:bg-desk-onama bg-mb-onama"
    >
      <div className="absolute inset-0 bg-bgdark/80" aria-hidden="true"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <SectionHeader eyebrow="Ko smo mi" title="O nama" />
        <p
          className="text-dcrvena text-base sm:text-xl text-center max-w-2xl mb-12"
          data-aos="fade-up"
        >
          Scorpions Legion je CS2 Discord zajednica osnovana 15.06.2023. Mesto gde se igrači
          okupljaju da igraju, pričaju i druže se.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <Icons ikonice={f.icon} stilovi="text-4xl text-plava mb-4" />
              <h4 className="text-bela font-bold text-xl mb-2">{f.title}</h4>
              <p className="text-bela/60 text-sm sm:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
