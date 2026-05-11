import { Section, Title, Description } from "./CTASection.style";
import CTAInput from "../cta-input/CTAInput.jsx";

function CTASection({ title, description, bgImage }) {
  return (
    <Section image={bgImage}>
      <Title
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></Title>
      <Description>{description}</Description>
      <CTAInput />
    </Section>
  );
}

export default CTASection;
