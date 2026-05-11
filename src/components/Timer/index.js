import { CircularProgress } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

import { usePrevious } from "hooks/usePrevious";

const Timer = ({ endDate, /*color,*/ sameDate }) => {
  const Ref = useRef(null);
  // const prevDateRef = useRef();
  const [timer, setTimer] = useState("00:00:00:00");
  const [isLoading, setIsLoading] = useState(true);
  const [splitTimer, setSplitTimer] = useState([]);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor((total / 1000 / 60 / 60 / 24) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
      days,
    };
  };

  useEffect(() => {
    setSplitTimer(timer?.split(":"));
  }, [timer]);

  // console.log("splitTimer", timer);

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      setIsLoading(false);
      setTimer(
        (days > 9 ? days : "0" + days) +
          ":" +
          (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setIsLoading(true);
    setTimer("00:00:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = sameDate ? endDate : new Date(endDate);
    return deadline;
  };
  const prevDate = usePrevious(endDate);

  useEffect(() => {
    if (prevDate?.toString() !== endDate?.toString()) clearTimer(getDeadTime());
  }, [endDate]);

  if (isLoading) {
    return (
      <span>
        <CircularProgress
          size={15}
          style={{ /*color: color ? color : "white",*/ marginLeft: "10px" }}
        />
      </span>
    );
  }

  return (
    <span /*style={{ color: color ? color : "white" }}*/>
      {splitTimer[0] !== "00" && (
        <>
          <span
            className="timeDigit1"
            /*style={{ color: color ? color : "white" }}*/
          >
            {splitTimer[0]}
          </span>
          <span className="timeText" /*style={{ color: color ? color : "white" }}*/>
            d
          </span>
          <span>:</span>
        </>
      )}
      <span className="timeDigit" /*style={{ color: color ? color : "white" }}*/>
        {splitTimer[1]}
      </span>
      <span className="timeText" /*style={{ color: color ? color : "white" }}*/>
        h
      </span>
      <span>:</span>
      <span className="timeDigit" /*style={{ color: color ? color : "white" }}*/>
        {splitTimer[2]}
      </span>
      <span className="timeText" /*style={{ color: color ? color : "white" }}*/>
        m
      </span>
      <span>:</span>
      <span className="timeDigit" /*style={{ color: color ? color : "white" }}*/>
        {splitTimer[3]}
      </span>
      <span className="timeText" /*style={{ color: color ? color : "white" }}*/>
        s
      </span>
    </span>
  );
};

export default Timer;
