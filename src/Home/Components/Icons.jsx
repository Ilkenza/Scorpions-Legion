import PropTypes from "prop-types"
import { FaDiscord, FaInstagram, FaSteam, FaTiktok, FaXTwitter, FaAngleDown, FaAngleUp, FaPlus, FaMinus, FaGift, FaTrophy, FaCoins, FaPalette, FaHandshake, FaHashtag } from "react-icons/fa6";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"


const Icons = ({ ikonice, stilovi }) => {
  const mreze = {
    instagram: <FaInstagram className={stilovi}/>,
    steam: <FaSteam className={stilovi}/>,
    twitter: <FaXTwitter className={stilovi}/>,
    discord: <FaDiscord className={stilovi}/>,
    tiktok: <FaTiktok className={stilovi}/>,
    downangle: <FaAngleDown className={stilovi} />,
    upangle: <FaAngleUp className={stilovi} />,
    menu: <AiOutlineMenu className={`text-red-500 ${stilovi}`} />,
    close: <AiOutlineClose className={`text-red-500 ${stilovi}`} />,
    plus: <FaPlus className={`text-bela text-4xl my-1 m-3 cursor-pointer outline-none ${stilovi}`} />,
    minus: <FaMinus className={`text-glcrvena text-xl ${stilovi}`}/>,
    gift: <FaGift className={stilovi} />,
    trophy: <FaTrophy className={stilovi} />,
    coins: <FaCoins className={stilovi} />,
    palette: <FaPalette className={stilovi} />,
    handshake: <FaHandshake className={stilovi} />,
    hashtag: <FaHashtag className={stilovi} />
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