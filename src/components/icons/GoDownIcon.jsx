function GoDownIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
    >
      <g opacity="0.3">
        <circle
          cx="32.5"
          cy="32"
          r="31"
          stroke={props.color ? props.color : "#4360AB"}
          strokeWidth="2"
        />
        <path
          d="M32.5 20C32.5 19.4477 32.0523 19 31.5 19C30.9477 19 30.5 19.4477 30.5 20L32.5 20ZM30.7929 44.7071C31.1834 45.0976 31.8166 45.0976 32.2071 44.7071L38.5711 38.3431C38.9616 37.9526 38.9616 37.3195 38.5711 36.9289C38.1805 36.5384 37.5474 36.5384 37.1569 36.9289L31.5 42.5858L25.8431 36.9289C25.4526 36.5384 24.8195 36.5384 24.4289 36.9289C24.0384 37.3195 24.0384 37.9526 24.4289 38.3431L30.7929 44.7071ZM30.5 20L30.5 44L32.5 44L32.5 20L30.5 20Z"
          fill={props.color ? props.color : "#4360AB"}
        />
      </g>
    </svg>
  );
}

export default GoDownIcon;
