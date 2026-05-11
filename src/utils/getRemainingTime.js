const getTimeRemaining = (date) => {
  const e = new Date(date);
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

export default getTimeRemaining;
