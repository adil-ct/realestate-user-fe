import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";

import { setTourHoverCard } from "store/actions";
import TourTooltip from "./TourTooltip";
import styles from "./styles";
import { PRODUCT_TOUR_ENABLE } from "constants/env";
import { routePaths } from "routes/mainRoutes/routePaths";

const TourWrapper = ({ children }) => {
  const classes = styles();
  const [run, setRun] = useState(false);
  let timeoutRef = useRef();
  const [lifecycle, setLifycycle] = useState("");
  const [isTutorialFinished, setIsTutorialFinished] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const { propertyId } = useSelector((state) => state.tour);
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const initSteps = [
    {
      target: "body", // Portfolio
      content: (
        <div>
          <h3 className={classes.tourContentBox}>Welcome to Invest Tech! 👋</h3>
          <p>
            Complete a quick walkthrough to familiarize yourself with the site,
            so you can start investing like a Invest Tech.
          </p>
        </div>
      ),
      placement: "center",
      disableBeacon: true,
    },
    {
      target: "#joyride-four-fields", // Portfolio
      content: (
        <div>
          <p>
            The four fields here provide relevant portfolio-level details on the
            investments you make.
          </p>
        </div>
      ),
      disableBeacon: true,
    },
    {
      target: "#joyride-deposit", // Portfolio  // deposit
      content: (
        <p>
          Once your KYC verification is completed, click on this button to
          deposit funds into your wallet.
        </p>
      ),
      disableBeacon: true,
    },
    {
      target: "#joyride-withdraw", // Portfolio
      content: (
        <p>
          To withdraw, simply click withdraw and decide where to send the funds.
        </p>
      ),
      disableBeacon: true,
    },
    {
      target: "#joyride-txn-history", // Portfolio
      content: (
        <p>Here you will find a log of all of your transaction activity.</p>
      ),
      disableBeacon: true,
    },
    {
      target: "#joyride-hover-card", // Marketplace
      content: (
        <p>
          Hover over each return metric to learn more about them. Click on the
          property photo or anywhere on the “property card” for more details
          about the property, such as the market, property overview, and
          investment rationale.
        </p>
      ),
      disableBeacon: true,
    },
    {
      target: "#joyride-invest1", // Marketplace
      content: (
        <p>
          Hover over the property with your mouse on laptop or tap on smart
          phone to expand the card. Click the invest button to continue your
          journey to becoming a real estate Invest Tech.
        </p>
      ),
      disableBeacon: false,
    },
    {
      target: ".joyride-rational", // Property Description
      content: (
        <p>
          With every property offered on Invest Tech vetted by industry professionals,
          check out our Rationale section to see why this property made the cut.
        </p>
      ),
      disableBeacon: false,
    },
    {
      target: ".joyride-overview", // Property Description
      content: (
        <p>In this section, you can learn more about the property details.</p>
      ),
      disableBeacon: false,
    },
    {
      target: ".joyride-market", // Property Description
      content: (
        <p>
          Head over to our Market section to learn more about the market
          fundamentals, including rent trends and appreciation data.
        </p>
      ),
      disableBeacon: false,
    },
    {
      target: ".joyride-investment", // Property Description
      content: (
        <p>
          In our Investment section, learn about the investment&apos;s
          capitalization. Play around with your own assumptions in our
          interactive returns simulator to see how different value drivers
          affect your returns.
        </p>
      ),
      disableBeacon: false,
    },
    {
      target: ".joyride-process", // Property Description
      content: (
        <p>
          Check out our Process section to see the step-by-step of the property
          onboarding in real time.
        </p>
      ),
      disableBeacon: false,
    },
    {
      target: ".joyride-documents", // Property Description
      content: (
        <p>
          The Documents section provides in-depth documentation on all the due
          diligence, legal, and other important processes conducted on the
          property. We believe in providing full transparency to our investors.
        </p>
      ),
      disableBeacon: false,
    },
    {
      target: "#joyride-map", //Property Description
      content: (
        <p>
          Click on the map icon to see the property&apos;s location pinned on
          Google maps.
        </p>
      ),
      disableBeacon: false,
    },
    {
      target: "#joyride-invest2", //Property Description
      content: (
        <p>
          When you reach the decision to invest, click on the Invest button, and
          input your desired amount. Now, you’re investing like a Invest Tech! Once
          the property closes, you will receive rental income distributed
          directly to your account, updates on value of your portfolio in real
          time, and tax statements directly in your user portal (much like
          Schwab, Fidelity or Robinhood!).
        </p>
      ),
      disableBeacon: false,
    },
    {
      target: "body", // account
      content: (
        <div>
          <h3 className={classes.tourContentBox}>Congratulations! 🎉</h3>
          <p>
            You are now ready to invest. Deposit funds and start investing like
            a Invest Tech.
          </p>
        </div>
      ),
      placement: "center",
      disableBeacon: true,
    },
  ];

  function watchLifecycleVal() {
    timeoutRef.current = setTimeout(function () {
      if (lifecycle === "init") {
        setRun(false);
      }
    }, 7000);
  }

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    if (lifecycle === "init") {
      watchLifecycleVal();
    }
  }, [lifecycle]);

  const handleCallback = (data) => {
    const { action, index, status, type } = data;
    if (ACTIONS.CLOSE === action) {
      setRun(false);
      setStepIndex(0);
      return;
    }
    setLifycycle(data?.lifecycle);

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      if (action === ACTIONS.NEXT) {
        if (index + 1 === 5) {
          // Redirection to marketplace screen
          setRun(false);
          navigate(routePaths.INVESTOR_PATH);
          dispatch(setTourHoverCard(false));
          setTimeout(() => {
            setStepIndex(index + 1);
            setRun(true);
          }, 6000);
        } else if (index + 1 === 6) {
          // Hover card in marketplace screen
          // activate hover modal
          dispatch(setTourHoverCard(true));
          setRun(false);
          setTimeout(() => {
            setStepIndex(index + 1);
            setRun(true);
          }, 1000);
        } else if (index + 1 === 7) {
          // Redirect to property profile screen
          // activate hover modal
          dispatch(setTourHoverCard(false));
          setRun(false);
          const selector = initSteps[index + 1].target;
          navigate(`${routePaths.PROPERTY_PROFILE_PATH}/?id=${propertyId}`);
          setTimeout(() => {
            const ele = document.querySelector(selector);
            var topPos = ele?.offsetLeft;
            document.querySelector(".Joyride-tabBox").scrollLeft = topPos;
            ele?.click();
            setStepIndex(index + 1);
            setRun(true);
          }, 3000);
        } else if ([8, 9, 10, 11, 12].includes(index + 1)) {
          const selector = initSteps[index + 1].target;
          const ele = document.querySelector(selector);
          var topPos = ele?.offsetLeft;
          document.querySelector(".Joyride-tabBox").scrollLeft = topPos;
          ele?.click();
          setRun(false);
          setTimeout(() => {
            setStepIndex(index + 1);
            setRun(true);
          }, 1000);
        } else if (index + 1 === 15) {
          // Redirect to property profile screen
          setRun(false);
          navigate(routePaths.PORTFOLIO_PATH);
          setTimeout(() => {
            setStepIndex(index + 1);
            setRun(true);
          }, 2000);
        } else {
          setStepIndex(index + 1); // Update state to advance the tour
        }
        setTimeout(() => {
          window.scrollTo(0, 1);
        }, 300);
      }

      if (action === ACTIONS.PREV) {
        if (index - 1 === 1) {
          // Redirect to payment method screen
          setRun(false);
          navigate(routePaths.PORTFOLIO_PATH);
          setTimeout(() => {
            setStepIndex(index - 1);
            setRun(true);
          }, 2000);
        } else if (index - 1 === 4) {
          setRun(false);
          navigate(routePaths.PORTFOLIO_PATH);
          setTimeout(() => {
            setStepIndex(index - 1);
            setRun(true);
          }, 2000);
        } else if (index - 1 === 5) {
          // Hover card in marketplace screen
          // activate hover modal
          dispatch(setTourHoverCard(false));
          setRun(false);
          setTimeout(() => {
            setStepIndex(index - 1);
            setRun(true);
          }, 1000);
        } else if (index - 1 === 6) {
          // Redirect to property profile screen
          // activate hover modal
          dispatch(setTourHoverCard(false));
          setRun(false);
          navigate(routePaths.INVESTOR_PATH);
          setTimeout(() => {
            setStepIndex(index - 2);
            setRun(true);
          }, 4000);
        } else if ([7, 8, 9, 10, 11, 12].includes(index - 1)) {
          const selector = initSteps[index - 1].target;
          const ele = document.querySelector(selector);
          if ([7, 8, 9].includes(index - 1)) {
            document.querySelector(".Joyride-tabBox").scrollLeft -= 100;
          }
          ele?.click();
          setRun(false);
          setTimeout(() => {
            setStepIndex(index - 1);
            setRun(true);
          }, 1000);
        } else if (index - 1 === 14) {
          // Redirect to property profile screen
          setRun(false);
          navigate(-1);
          setTimeout(() => {
            setStepIndex(index - 1);
            setRun(true);
          }, 2000);
        } else {
          if (run) {
            setStepIndex(index - 1); // Update state to advance the tour
          }
        }
      }
    } else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
      setRun(false);
    }
  };

  useEffect(() => {
    const tourStarted = localStorage.getItem("tour_started");
    const eligibleForTour = tourStarted;
    if (
      eligibleForTour &&
      location?.pathname === routePaths.PORTFOLIO_PATH &&
      !isTutorialFinished &&
      PRODUCT_TOUR_ENABLE &&
      userData?.userType === "investor"
    ) {
      setTimeout(() => {
        setRun(true); // Start tour
        setIsTutorialFinished(true);
        setStepIndex(0);
        localStorage.removeItem("tour_started");
      }, 3000);
    }
  }, [location?.pathname, userData?.userType]);

  return (
    <>
      {children}
      <Joyride
        callback={handleCallback}
        continuous
        run={run}
        stepIndex={stepIndex}
        steps={initSteps}
        scrollOffset={200}
        tooltipComponent={TourTooltip}
      />
    </>
  );
};

export default TourWrapper;
