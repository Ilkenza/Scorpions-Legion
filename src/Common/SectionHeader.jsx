import PropTypes from "prop-types";

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      {eyebrow && (
        <span
          className="glass rounded-full px-4 py-1.5 text-xs sm:text-sm tracking-[0.3em] uppercase text-dcrvena mb-4"
          data-aos="fade-up"
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-bold text-glcrvena glow-text leading-none"
        data-aos="fade-up"
      >
        {title}
      </h2>
      <div
        className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-glcrvena to-transparent rounded-full mt-4"
        data-aos="fade-up"
      ></div>
    </div>
  );
}

SectionHeader.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
