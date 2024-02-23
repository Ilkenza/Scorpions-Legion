import { useEffect } from "react";
import Icons from "./Icons";
import Aos from "aos";
import { Link } from "react-router-dom";

const Networks = () => {
  const IconStyles = "m-2 text-2xl";
  const LinkStyles = "transition-all hover:text-glcrvena text-bela ease-linear duration-100";
  useEffect(() => {
    Aos.init({ duration: 500, easing: "linear" });
  }, []);
  return (
    <div
      className=" hidden md:flex flex-col items-end justify-center h-full w-[3.5rem] fixed right-0  z-10"
    >
      <div className="bg-[#1E1E1E] mb-6 py-1 px-[.5rem] flex items-center flex-col rounded-l-lg" data-aos="fade-left" data-aos-delay="50">
      <a
        href="https://discord.gg/hcbMShPYJ8"
        target="blank"
        className={LinkStyles}
      >
        <Icons ikonice="discord" stilovi={IconStyles} />
      </a>
      <a
        href="https://www.instagram.com/scorpionslegion"
        target="blank"
        className={LinkStyles}
      >
        <Icons ikonice="instagram" stilovi={IconStyles} />
      </a>
      <a
        href="https://steamcommunity.com/groups/scorpionslegion"
        target="blank"
        className={LinkStyles}
      >
        <Icons ikonice="steam" stilovi={IconStyles} />
      </a>
      <a
        href="https://www.tiktok.com/@scorpionslegion"
        target="blank"
        className={LinkStyles}
      >
        <Icons ikonice="tiktok" stilovi={IconStyles} />
      </a>
      </div>
      <div className="writing-mode bg-[#1E1E1E] rounded-l-lg flex items-center justify-center py-4 px-[.625rem]" data-aos="fade-left"  data-aos-delay="200">
      <Link className="transition-all hover:text-glcrvena text-bela ease-linear duration-100 font-bold m-1 text-lg cursor-pointer" to="/teamgenerator">Team Generator</Link>
    </div>
    </div>
  );
};
export default Networks;
