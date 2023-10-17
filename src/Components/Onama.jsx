import Aos from "aos";
import { useEffect } from "react";

function Onama() {

  const paragraphStyles = "text-base md:text-xl text-center text-dcrvena"
  useEffect(() => {
    Aos.init({duration:1000, 
      easing:"linear"});
  }, []);
  return (
    <div
      id="Onama"
      className="bg-cover bg-no-repeat bg-center w-full h-[100vh] flex justify-center items-center flex-col text-glcrvena font-bold md:bg-desk-onama bg-mb-onama">
      <h3 className="text-[4rem] sm:text-[5rem] md:text-[6rem]" data-aos="fade-up" data-aos-delay="50">O nama</h3>
      <div className="h-[0.5rem] w-[15rem] sm:w-[18rem] md:w-[22rem] bg-glcrvena mb-14" data-aos="fade-up" data-aos-delay="50"></div>
      <p className={paragraphStyles} data-aos="fade-up" data-aos-delay="150">
        Scorpions Legion je discord zajednica gde se okupljaju CS2 igraci.<br/>
        Server je osnovan 15.06.2023.</p>
        <br/>
        <p className={paragraphStyles} data-aos="fade-up" data-aos-delay="250">Na serveru se prave givavejevi,odrzava se povremeno fastcup, ima<br/>
        dobra ekonomija, self-rolovi,partnership koji radimo samo sa cs2<br/>
        serverima,pravljenje sobe i editovanje iste sobe.</p>
        <br/>
        <p className={paragraphStyles} data-aos="fade-up" data-aos-delay="350">Server je napravljen u cilju da bude sto vise cs2 igraca koji mogu<br/>
         medjusobno da igraju cs2 i da pisu medjusobno.</p>
    </div>
  );
}

export default Onama;
