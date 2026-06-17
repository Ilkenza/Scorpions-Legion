import Icons from "./Icons";
import PropTypes from "prop-types";

function FAQitem({ open, toggle, title, desc, num }) {
  return (
    <div
      className={`glass rounded-xl overflow-hidden transition-[border-color,box-shadow] duration-300 ${
        open ? "border-glcrvena/60 shadow-glow-red" : "glass-hover"
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 text-left p-4 md:p-5 focus-visible:outline-none"
        onClick={toggle}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3 min-w-0">
          <span className="font-display text-plava/80 text-lg sm:text-xl tabular-nums shrink-0">
            {String(num).padStart(2, "0")}
          </span>
          <h3
            className={`font-display font-semibold text-lg sm:text-xl transition-colors duration-200 ${
              open ? "text-glcrvena" : "text-bela"
            }`}
          >
            {title}
          </h3>
        </span>
        <span
          className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-lg glass text-glcrvena text-xl transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <Icons ikonice="downangle" stilovi="" />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <p className="text-bela/70 text-base sm:text-lg px-4 md:px-5 pb-5 pt-0 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

FAQitem.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  num: PropTypes.number,
};

export default FAQitem;
