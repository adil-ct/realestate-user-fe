import {
  CardContainer,
  CardImage,
  CardText1,
  CardText2,
  CardText3,
  CardTextContent,
  CardTextWarp,
  CardWarpIcons,
} from "./style";
import logo1 from "../../assets/icons/investors/insta.svg";
import logo2 from "../../assets/icons/investors/x.svg";
import logo3 from "../../assets/icons/investors/linkedin.svg";

const CardInvestors = ({
  isActive,
  title,
  subTitle,
  image,
  desc,
  socialMedia,
}) => {
  return (
    <CardContainer isActive={isActive}>
      <CardImage src={image} alt="img1" isGrayscale={isActive} />
      <CardTextContent>
        <CardTextWarp>
          <CardText1>{title}</CardText1>
          <CardText2>{subTitle}</CardText2>
        </CardTextWarp>

        {!isActive && <CardText3>{desc}</CardText3>}
        {!isActive && (
          <CardWarpIcons>
            {socialMedia.instagram && (
              <a href={socialMedia.instagram} target="_blank" rel="noreferrer">
                <img src={logo1} alt="logo" />
              </a>
            )}
            {socialMedia.twitter && (
              <a href={socialMedia.twitter} target="_blank" rel="noreferrer">
                <img src={logo2} alt="logo" />
              </a>
            )}
            {socialMedia.linkedin && (
              <a href={socialMedia.linkedin} target="_blank" rel="noreferrer">
                <img src={logo3} alt="logo" />
              </a>
            )}
          </CardWarpIcons>
        )}
      </CardTextContent>
    </CardContainer>
  );
};

export default CardInvestors;
