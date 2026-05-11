import { useState } from "react";
import { Section, Title, FaqsList, ItemContainer } from "./FaqSection.style";
import { Collapse } from "react-collapse";
import { faqs } from "utils/faq.js";

function FAQItem({ title, line1, line2 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ItemContainer onClick={() => setIsOpen(!isOpen)}>
      <header>
        <h4>{title}</h4>
        {isOpen ? <b>-</b> : <b>+</b>}
      </header>
      <Collapse isOpened={isOpen}>
        {line1 && <p>{line1}</p>}
        {line2 && <p>{line2}</p>}
      </Collapse>
    </ItemContainer>
  );
}

function FaqSection() {
  return (
    <Section>
      <Title>Frequently Asked Questions</Title>
      <FaqsList>
        {faqs.map((faq, key) => (
          <FAQItem
            key={key}
            title={faq.question}
            line1={faq.answer}
            line2={faq.answer2}
          />
        ))}
      </FaqsList>
    </Section>
  );
}

export default FaqSection;
