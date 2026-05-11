/**
  The linearGradient() function helps you to create a linear gradient color background
 */

function linearGradient(color, colorState, angle = 90, start = 0, end = 100) {
  return `linear-gradient(${angle}deg, ${color} ${start}%, ${colorState} ${end}%)`;
}

export default linearGradient;
