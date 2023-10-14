import { useEffect } from "react";
import Icons from "./Icons";
import Aos from "aos";

const Mreze = () => {
  const micons = "m-4 text-2xl";
  const mstilovi = "transition-all hover:text-glcrvena text-bela ease-linear duration-100";
  useEffect(() => {
    Aos.init({ duration: 500, easing: "linear" });
  }, []);
  return (
    <div
      className=" hidden md:block fixed right-0 top-[20rem] rounded-l-lg bg-[#1E1E1E] z-10"
      data-aos="fade-left"
    >
      <a
        href="https://discord.gg/hcbMShPYJ8"
        target="blank"
        className={mstilovi}
      >
        <Icons ikonice="discord" stilovi={micons} />
      </a>
      <a
        href="https://www.instagram.com/scorpionslegion"
        target="blank"
        className={mstilovi}
      >
        <Icons ikonice="instagram" stilovi={micons} />
      </a>
      <a
        href="https://steamcommunity.com/groups/scorpionslegion"
        target="blank"
        className={mstilovi}
      >
        <Icons ikonice="steam" stilovi={micons} />
      </a>
      <a
        href="https://www.tiktok.com/@scorpionslegion"
        target="blank"
        className={mstilovi}
      >
        <Icons ikonice="tiktok" stilovi={micons} />
      </a>
    </div>
  );
};
export default Mreze;
