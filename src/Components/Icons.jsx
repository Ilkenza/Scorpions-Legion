import PropTypes from "prop-types"
import { FaDiscord, FaInstagram, FaSteam, FaTiktok, FaTwitter, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Icons = ({ ikonice, stilovi }) => {
  const mreze = {
    instagram: <FaInstagram className={stilovi}/>,
    steam: <FaSteam className={stilovi}/>,
    twitter: <FaTwitter className={stilovi}/>,
    discord: <FaDiscord className={stilovi}/>,
    tiktok: <FaTiktok className={stilovi}/>,
    downangle: <FaAngleDown className={stilovi} />,
    upangle: <FaAngleUp className={stilovi} />,
    menu: <AiOutlineMenu className={`text-red-500 ${stilovi}`} />,
    close: <AiOutlineClose className={`text-red-500 ${stilovi}`} />
  };

  return (
    <div>
      {mreze[ikonice]}
    </div>
  );
};

Icons.propTypes = {
  ikonice: PropTypes.string.isRequired,
  stilovi: PropTypes.string
};

export default Icons