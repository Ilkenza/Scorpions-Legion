import { useEffect } from "react";
import Icons from "./Icons";
import Aos from "aos";
import { Link } from "react-scroll";


function Home () {
  useEffect(() => {
    Aos.init({duration:500, 
      easing:"linear"});
  }, []);
  const pstyles = "mr-2 min-[420px]:mr-5 texl-lg min-[420px]:text-xl sm:text-3xl lg:text-4xl"
  const navadisc = "border-4 rounded-md text-plava inline-flex items-center px-4 py-3 border-plava justify-center texl-lg min-[420px]:text-xl sm:text-3xl lg:text-4xl mt-10 duration-300 ease-linear hover:duration-300 hover:ease-linear hover:shadow-disc hover:text-bela"
  return (
    <>
    <div id="Pocetna" className="bg-cover bg-no-repeat bg-center w-full h-[100vh] md:bg-desk-pocetna bg-mb-pocetna min-[420px]:block flex flex-col">
      <div className="text-glcrvena font-bold inline-flex flex-col justify-center items-center min-[420px]:items-start top-[6rem] h-[80vh] left-0 min-[420px]:left-10 relative" data-aos="fade-left">
        <h3 className="text-2xl sm:text-[2.5rem] lg:text-[3.5rem] leading-none text-dcrvena">CS2 Gaming Community</h3>
        <h1 className="text-4xl min-[420px]:text-5xl sm:text-[4.5rem] lg:text-[7rem] leading-none">Scorpions Legion</h1>
        <a href="https://discord.gg/hcbMShPYJ8" target="blank" className={navadisc}>
          <Icons ikonice="discord" stilovi={pstyles}/>Udji na Discord</a>
      </div>
      <div className="flex items-center justify-center" data-aos="fade-down">
        <Link spy={true} smooth={true} to="Onama" className="cursor-pointer"><Icons ikonice="downangle" stilovi="text-glcrvena text-6xl cursor-pointer animate-bounce2"/></Link></div>
    </div>
    <div className="inline-flex items-center right-10 sm:right-20 bottom-0 fixed rounded-t-lg bg-[#499bf8cc] p-1" data-aos="fade-up">
        <Link spy={true} smooth={true} to="Pocetna" className="cursor-pointer"><Icons ikonice="upangle" stilovi="text-bela hover:text-glcrvena duration-300 ease-linear hover:ease-linear hover:duration-300 text-5xl sm:text-6xl cursor-pointer"/></Link></div>
    </>
  )
}

export default Home
