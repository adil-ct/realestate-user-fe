import CTASection from "../../components/cta/CTASection";
// Logo removed for whitelabeling
import scratched from "../../assets/icons/scratched.svg";
import img1 from "../../assets/images/about-us/img1.png";
import img2 from "../../assets/images/about-us/img2.png";
import img3 from "../../assets/images/about-us/img3.png";
import img4 from "../../assets/images/about-us/img4.png";
import linkedin from "../../assets/icons/linkedin.svg";
import alex from "../../assets/images/about-us/alex.png";
import joe from "../../assets/images/about-us/joe.png";
import tammy from "../../assets/images/about-us/tammy.png";
import {
  CardContainer,
  ContainerGreen,
  ContainerHistoryText,
  ContainerName,
  FirstSection,
  HistoryText,
  ImageAbsolute,
  NameAboutUs,
  ParagraphAbout,
  Picture,
  Scratched,
  TextContent,
  Title1,
  Title2,
  Title3,
  TitleGreen,
  WrapTitleGray,
} from "./aboutUs.style";
import ctaBgImage from "assets/images/global/cta-about-v2.png";

const AboutUs = () => {
  return (
    <>
      <FirstSection>
        <ImageAbsolute top="252px" left="20px" src={img1} alt="image 1" />
        <ImageAbsolute top="860px" left="70px" src={img2} alt="image 2" />
        <ImageAbsolute top="80px" right="0px" src={img3} alt="image 3" />
        <ImageAbsolute top="560px" right="0px" src={img4} alt="image 4" />
        <div>
          <div style={{fontSize: '32px', fontWeight: 'bold', color: '#34c38f', marginBottom: '20px'}}>Occurrence</div>
          <Title1>Legacy matters</Title1>
          <WrapTitleGray>
            <Title2>We&#39;re all </Title2>
            <Title3>investors</Title3>
            <Scratched>
              <img src={scratched} alt="Scratched image" width="100%" />
            </Scratched>
          </WrapTitleGray>
          <Title2>invest tech</Title2>
        </div>
        <ParagraphAbout marginTop="80px">
          Our team once catered exclusively to the wealthiest echelon of
          society— investing billions for the top .00001%. At Occurrence our mission,
          our personal calling, has morphed to a profound duty. A duty to
          present unparalleled opportunities to you. We&#39;re not only
          allocating capital and facilitating transactions; we&#39;re reshaping
          paradigms, unveiling possibilities, and enabling agency. We&#39;re
          making Occurrence and we take it personally.
        </ParagraphAbout>
        <ParagraphAbout marginTop="60px">
          We bridge the old and new. Where effortless wealth stems from asset
          ownership, and the hunger and boldness of newer generations define our
          vision. With Invest Tech, we aim to make real estate not just an investment
          but an aspiration once again, and in doing so, we invite you to be
          part of a movement that reshapes the world.
        </ParagraphAbout>
      </FirstSection>
      <ContainerGreen>
        <TitleGreen>
          Meet <span style={{ fontWeight: "800" }}>Our Team</span>
        </TitleGreen>
        {dataCardsMock.map((data, index) => (
          <CardContainer key={index}>
            <Picture src={data.image} alt="image alex" />
            <TextContent>
              <ContainerName>
                <NameAboutUs>{data.name}</NameAboutUs>
                <a href={data.linkedin} target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="image alex" />
                </a>
              </ContainerName>
              <p className="role-text">{data.role}</p>
              <p className="desc-text">{data.desc}</p>
              <ContainerHistoryText>
                <p style={{ fontWeight: "800" }}>
                  Fun Fact: <HistoryText>{data.history}</HistoryText>
                </p>
              </ContainerHistoryText>
            </TextContent>
          </CardContainer>
        ))}
      </ContainerGreen>
      <CTASection
        bgImage={ctaBgImage}
        title="Estates were meant <b>to be fought over</b>"
        description="If you're a Occurrence, your grandkids will be fighting over your estate."
      />
    </>
  );
};

export default AboutUs;

const dataCardsMock = [
  {
    image: alex,
    name: "Alex Blackwood",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/alex-blackwood-a3996a135",
    desc: "Alex has in-depth, firsthand experience working with blockchain banks, mortgage companies, fintech platforms, and real estate investors through his time in Investment Banking and Real Estate Private Equity at Goldman Sachs. Alex graduated from Georgetown University's McDonough School of Business.",
    history:
      "Alex rowed competitively in high school and college. He once spent three years training, including a month in England with his team, all to qualify and compete in the 5-day prestigious Henley Royal Regatta. He lost on the 1st day.",
  },
  {
    image: joe,
    name: "Joey Gumataotao",
    role: "President / COO",
    linkedin:
      "https://www.linkedin.com/in/joeygumataotao?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACPScxcBh9VXxhHwKLaA746ufDfcRksOu3M&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B0y3hAOe%2BQMajZ8nRraxjGQ%3D%3D",
    desc: "Joey brings to the table an unparalleled expertise in residential real estate and a comprehensive understanding of broader housing market economics. Joey dedicated the entirety of his foundational career to the Real Estate Investing team at Goldman Sachs. Joey is a Harvard alumnus.",
    history:
      "Joey took a gap year before college to play professionally on the European tennis tour. He quickly realized how good the rest of the world was.",
  },
  {
    image: tammy,
    name: "Tammy Perrin",
    role: "Head of Engineering",
    linkedin:
      "https://www.linkedin.com/in/tammyperrin?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAREnO0BHEMyb9WiToX8LNPrwCCJeAgJax8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BASOZ9TbrTjyqOOlu1jpiMQ%3D%3D",
    desc: "Tammy led engineering teams at Google in Search, News, and Information Literacy. Before Google, Tammy was Director of Software Engineering at Capital One and credit wise. She's got academic chops too, boasting an M.S. in Computer Science from Johns Hopkins University and a triple-threat B.S. in Electrical Engineering, Mathematics, and Physics from the University of Maryland.",
    history:
      "Tammy was once denied entry to Ghana because she lost to a border guard in a chess match.",
  },
];
