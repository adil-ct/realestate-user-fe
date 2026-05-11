import { LazyLoadImage } from "react-lazy-load-image-component";
import styles, { AvatarsGroupContainer } from "./styles";
import { 
  BowserInvestor1, 
  BowserInvestor2, 
  BowserInvestor3,
  JomarInvestor1,
  JomarInvestor2,
  JomarInvestor3,
  TallheathInvestor1,
  TallheathInvestor2,
  TallheathInvestor3,
} from "constants/assets";
import { Box } from "@mui/material";

// TODO - this is hardcoded but we need API to return
const getImage = (title, num) => {
  return title === 'The Logan'  ? // Jomar 
           num === 1 ? JomarInvestor1 : 
           num === 2 ? JomarInvestor2 : 
           JomarInvestor3
         :
         title === 'The Roman'  ? // Tallheath 
           num === 1 ? TallheathInvestor1 : 
           num === 2 ? TallheathInvestor2 : 
           TallheathInvestor3
         :
         title === 'Bowser Ave' ? 
           num === 1 ? BowserInvestor1 :
           num === 2 ? BowserInvestor2 : 
           BowserInvestor3
         :
         // default - Bowser images
         num === 1 ? BowserInvestor1 :
         num === 2 ? BowserInvestor2 : 
         BowserInvestor3;
};
const getNumAdditionalInvestors = (title) => {
  return title === 'The Logan'  ? '+'   : // Jomar 
         title === 'The Roman'  ? '+'   : // Tallheath 
         title === 'Bowser Ave' ? '+34' :
         '+'; // default: plus sign
};


const InvestorsAvatars = ({ title }) => {
  const classes = styles();

  return (
    <AvatarsGroupContainer>
      <LazyLoadImage
        src={getImage(title, 1)}
        className={classes.avatar}
        alt="Investors Avatar"
        effect="blur"
      />
      <LazyLoadImage
        src={getImage(title, 2)}
        className={classes.avatar}
        alt="Investors Avatar"
        effect="blur"
      />
      <LazyLoadImage
        src={getImage(title, 3)}
        className={classes.avatar}
        alt="Investors Avatar"
        effect="blur"
      />
      <Box className={classes.surplus}>
        <span>{ getNumAdditionalInvestors(title) }</span>
      </Box>
    </AvatarsGroupContainer>
  );
};

export default InvestorsAvatars;
