import User1 from "assets/images/image1.png";
import LIcon1 from "assets/images/hiw1.png";
// import LIcon2 from 'assets/images/hiw3.png'
import LIcon3 from "assets/images/hiw2.png";
// import LIcon4 from 'assets/images/hiw4.png'
import LIcon5 from "assets/images/hiw5.png";
import LIcon6 from "assets/images/hiw6.png";

// Static data
const howItWorksData = [
  {
    avatar: User1,
    title: "Property Placed Under Contract",
    id: 1,
    active: true,
    carousel: false,
    link: false,
    licon: LIcon1,
    ricon: LIcon5,
    description:
      "Occurrence vets 1,000's of properties from our partners for every 1 that is offered on platform. Once a property makes it through the team's rigorous standards, the property is placed under contract",
  },
  {
    avatar: User1,
    title: "Property Listed on occurrence",
    id: 2,
    active: false,
    carousel: true,
    licon: null,
    ricon: null,
    link: false,
    description:
      "Occurrence lists the property for sale to our users. Investors can purchase fractional interest in the property",
  },
  {
    avatar: User1,
    title: "Investors Earn Rental Income, Property Appreciation & Tax Benefits",
    id: 3,
    active: false,
    carousel: false,
    link: false,
    licon: LIcon3,
    ricon: LIcon6,
    variant: true,
    description:
      "Once the property is successfully onboarded, investors earn pro rata benefits from the property including rental income, property appreciation, and tax benefits directly to their occurrence dashboard. While a professional property manager takes care of the day-to-day, any major operational decisions are put to a vote",
  },
  // {
  //     avatar: User1,
  //     title: 'mogul Lists Property',
  //     id: 4,
  //     active: false,
  //     carousel: true,
  //     link: true,
  //     description:
  //         "The house tokens are listed on mogul's market for sale. Once the house tokens are sold, mogul closes on the house on behalf of the LLC, and the deed is transferred to the LLC. The token holders now own a fractional interest in their own investment property.",
  // },
];

export default howItWorksData;
