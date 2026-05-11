import { Button } from "./CTAButton.style";

function LeadSection({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}

export default LeadSection;
