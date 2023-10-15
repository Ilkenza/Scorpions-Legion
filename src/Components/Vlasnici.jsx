import { useEffect } from "react";
import Icons from "./Icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Vlasnici() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  const stils = "text-4xl mr-2";
  const himg =
    "rounded-full border-2 border-dcrvena h-[15rem] sm:h-[20rem] bg-cover w-[15rem] sm:w-[20rem]";
  const hv = "text-5xl text-center text-dcrvena";
  const vicons =
    "inline-flex justify-center items-center text-plava border-2 p-2 my-3 rounded-lg border-plava duration-300 ease-linear w-full min-[320px]:w-72 md:w-full hover:duration-300 hover:ease-linear hover:shadow-[inset_0_-3.25em_0_0_#499BF8] hover:text-bela";
  const av = "flex flex-col items-center my-5 md:my-0";
  return (
    <div
      id="Vlasnici"
      className="h-[170vh] md:h-[100vh] flex justify-center items-center flex-col font-bold mt-10 sm:mt-4 m-4">
      <h3
        className="text-[4rem] text-glcrvena sm:text-[5rem] md:text-[6rem]"
        data-aos="fade-up"
        data-aos-delay="50">
        Vlasnici
      </h3>
      <div
        className="h-[0.5rem] w-[15rem] sm:w-[18rem] md:w-[22rem] bg-glcrvena mb-14"
        data-aos="fade-up"></div>
      <div
        className="flex flex-col md:flex-row w-full justify-evenly"
        data-aos="fade-up"
        data-aos-delay="70">
        <div className={av}>
          <div className={`bg-ilkenza-logo ${himg}`}></div>
          <h4 className={hv}>Ilkenza</h4>
          <a
            href="https://www.instagram.com/ilija03k_/"
            className={vicons}
            target="blank">
            <Icons ikonice="instagram" stilovi={stils} />
            Instagram
          </a>
          <a
            href="https://steamcommunity.com/id/ilkenza"
            className={vicons}
            target="blank">
            <Icons ikonice="steam" stilovi={stils} />
            Steam
          </a>
          <a
            href="https://twitter.com/Ilkenza1"
            className={vicons}
            target="blank">
            <Icons ikonice="twitter" stilovi={stils} />
            Twitter
          </a>
        </div>
        <div className={av} data-aos="fade-up" data-aos-delay="70">
          <div className={`bg-nesko-logo ${himg}`}></div>
          <h4 className={hv}>Nesko</h4>
          <a
            href="https://www.instagram.com/nebojsa.ninkovvv/"
            className={vicons}
            target="blank">
            <Icons ikonice="instagram" stilovi={stils} />
            Instagram
          </a>
          <a
            href="https://steamcommunity.com/id/neskojebre"
            className={vicons}
            target="blank">
            <Icons ikonice="steam" stilovi={stils} />
            Steam
          </a>
          <a
            href="https://twitter.com/pb_mootivation"
            className={vicons}
            target="blank">
            <Icons ikonice="twitter" stilovi={stils} />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vlasnici;
