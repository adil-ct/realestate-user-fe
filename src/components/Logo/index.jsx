import PropTypes from "prop-types";

/**
 * Occurrence brand logo.
 *
 * Renders the canonical SVG asset from /public.
 *  - tone="light" (default): /public/occurrence_logo.svg       (navy wordmark)
 *  - tone="dark":            /public/occurrence_logo_dark.svg  (white wordmark)
 *
 * The dark variant is the same artwork with the navy parts swapped for white
 * so the wordmark stays readable on the navy header / footer.
 *
 * Source aspect ratio: 400 x 140.
 */
const SOURCE_WIDTH = 480;
const SOURCE_HEIGHT = 140;
const PUBLIC = process.env.PUBLIC_URL || "";

const Logo = ({ height = 48, tone = "light", style, className, alt = "Occurrence" }) => {
  const width = Math.round((height * SOURCE_WIDTH) / SOURCE_HEIGHT);
  const src =
    tone === "dark"
      ? `${PUBLIC}/occurrence_logo_dark.svg`
      : `${PUBLIC}/occurrence_logo.svg`;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ display: "block", ...style }}
    />
  );
};

Logo.propTypes = {
  height: PropTypes.number,
  tone: PropTypes.oneOf(["light", "dark"]),
  style: PropTypes.object,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;
