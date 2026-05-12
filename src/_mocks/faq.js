import User2 from "assets/images/image3.png";
import User1 from "assets/images/image1.png";
import useConfig from "utils/config";

const { PLATFORM_LISTING_FEE } = useConfig();

// Static data
const faqData = [
  {
    avatar: User1,
    title: "How much time is required from me?",
    id: 1,
    active: true,
    description:
      "Little to none! Register, Invest and Earn. One-click voting on important operational decisions, in-place professional management carrying out property operations, and a user-friendly portal providing user / property updates allow you to sit back, relax, and earn.",
  },
  {
    avatar: User2,
    title: "How much of the property do I own?",
    id: 2,
    active: false,
    description:
      "As much or as little as you would like! You own the real estate and directly receive all of the benefits based on the percentage you own.",
  },
  {
    avatar: User1,
    title: "What’s the catch?",
    id: 3,
    active: false,
    link: "true",
    description: `We charge two fees: a platform listing fee and a property management fee. The platform listing fee is ${PLATFORM_LISTING_FEE} of the property value upon initial sale and ${PLATFORM_LISTING_FEE} upon resale of the tokens. The property management fee is a % of rent not to exceed 7-8%. The property management fee is variable between long and short term rentals, however occurrence sources the best rates possible to boost property-level, user-level, and occurrence co-invest cash flows.`,
  },
  {
    avatar: User2,
    title: "How are property decisions made?",
    id: 4,
    active: false,
    description:
      "Through our governance structure, we provide the outlet for the token holders  to vote on all capital expenditures above $500 (i.e. if a plumber fixes a sink for $100, you won’t be bothered; if a HVAC shuts down and costs $600 to repair, we will put the repair quote to a vote). Additionally, other major decisions, such as a sale, are put to a vote.",
  },
  {
    avatar: User2,
    title: "How is my investment protected?",
    id: 5,
    active: false,
    description: `Our customers' safety and security are a top priority for us. As such, we have partnered with the custodian Venly. Through their wallet solution, private keys are held securely. They perform the wallet custody on 3 million+ wallet users.`,
  },
];

export default faqData;
