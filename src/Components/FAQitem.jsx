import { Collapse } from "react-collapse"
import Icons from "./Icons"
import PropTypes from "prop-types"
import { useEffect } from "react";
import Aos from "aos";


function FAQitem ({open, toggle, title, desc}) {
  const icons = "text-xl sm:text-2xl md:text-4xl font-bold text-plava"
  useEffect(() => {
    Aos.init({duration:500, 
      easing:"ease-in-out"});
  }, []);
  return (
    <div key={toggle} className="bg-[#1E1E1E] mb-5 p-0 rounded-lg" data-aos="fade-up" data-aos-delay="30">
        <div className="flex items-center justify-between cursor-pointer p-3 md:p-5" onClick={toggle}>
            <h2 className={icons}>{title}</h2>
            <div>
                {open ? <Icons ikonice="downangle" stilovi={icons}/> : <Icons ikonice="upangle" stilovi={icons}/>}
            </div>
        </div>
        <Collapse isOpened={open}>
            <div className="text-base sm:text-lg md:text-xl p-3 md:p-5 pt-0 text-scrvena font-medium text-dcrvena">{desc}</div>
        </Collapse>
    </div>
  )
}

FAQitem.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string
};

export default FAQitem
