import PropTypes from "prop-types";
import useCountUp from "../hooks/useCountUp";
import DiscordWidget from "./DiscordWidget";

function StatItem({ end, suffix = "", label }) {
  const [value, ref] = useCountUp(end);
  return (
    <div
      ref={ref}
      className="glass glass-hover rounded-2xl px-5 py-4 flex flex-col items-center justify-center min-w-[6rem]"
    >
      <span className="text-[2rem] sm:text-[2.5rem] font-bold leading-none bg-gradient-to-b from-scrvena to-glcrvena bg-clip-text text-transparent">
        {value}
        {suffix}
      </span>
      <span className="text-bela/70 text-sm sm:text-base mt-2 text-center">
        {label}
      </span>
    </div>
  );
}

StatItem.propTypes = {
  end: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string,
};

function Stats() {
  // Godine postojanja se računaju od datuma osnivanja (15.06.2023).
  const years = Math.max(
    1,
    Math.floor((Date.now() - new Date("2023-06-15").getTime()) / 31557600000),
  );

  const stats = [
    { end: 300, suffix: "+", label: "Članova" },
    { end: years, suffix: "", label: "Godine" },
    { end: 10, suffix: "+", label: "Giveaway-a" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-stretch gap-3 sm:gap-4">
      {stats.map((s, i) => (
        <StatItem key={i} {...s} />
      ))}
      <DiscordWidget />
    </div>
  );
}

export default Stats;
