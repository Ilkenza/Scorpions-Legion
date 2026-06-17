import Aos from "aos";
import { useEffect } from "react";
import SectionHeader from "../../Common/SectionHeader";

function Rules() {
  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease-in-out" });
  }, []);

  // TODO: zameni placeholder pravila stvarnim tekstom pravila servera.
  const rules = [
    "Poštuj sve članove — bez vređanja, govora mržnje i diskriminacije.",
    "Zabranjen je spam, reklamiranje i deljenje tuđih invite linkova.",
    "Koristi kanale za njihovu namenu (pogledaj server map).",
    "Bez NSFW i nelegalnog sadržaja.",
    "Slušaj staff i poštuj Discord ToS i Community Guidelines.",
  ];

  return (
    <section
      id="Pravila"
      className="w-full min-h-screen flex flex-col justify-center items-center py-24 px-4 text-glcrvena"
    >
      <SectionHeader eyebrow="Pre nego što uđeš" title="Pravila" />
      <div className="w-[90%] max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {rules.map((rule, i) => (
          <div
            key={i}
            className="glass glass-hover flex items-start gap-4 rounded-xl p-4 md:p-5"
            data-aos="fade-up"
            data-aos-delay={i * 30}
          >
            <span className="text-plava font-bold text-2xl leading-none">{i + 1}.</span>
            <p className="text-dcrvena text-base md:text-lg font-medium">{rule}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rules;
