import React from "react";
import styled from "styled-components";
import Timeline from "../../../../components/timeline";
import StoryBlock from "../../../../components/storyBlock";
import robot from "../../../../assets/about/robot.svg.png";
import PSP from "../../../../assets/about/PSP.svg.png";
import atmos from "../../../../assets/about/atmos.svg.png";
import college from "../../../../assets/about/college.svg.png";
import theMakings from "@assets/about/theMakings.svg";
import resume from "@assets/about/resume.pdf";
import HeartBeat from "../../../../components/minorComponents/heartBeat";
import { Fragment } from "react";
import { colors, mobileBreakPoint } from "../../../../constants";
import { ArrowDownload24Filled } from "@fluentui/react-icons";

const AccentText = styled.span`
  color: ${colors.accent};
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;
  gap: 7rem;
  @media (max-width: ${mobileBreakPoint}) {
    padding: 0;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;
`;

const IntroHero = styled.div`
  font-size: 2.5rem;
  line-height: 4rem;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1.5rem;
    flex-direction: column;
    line-height: 2.5rem;
    gap: 0.5rem;
  }
`;

const IntroHeroLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.gap : 0)};
`;

const IntroContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const IntroEnd = styled.span`
  margin-top: 6rem;
  width: 40rem;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 2rem;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1rem;
    width: calc(100vw - 2rem);
    flex-direction: column;
    line-height: 1.5rem;
    gap: 0.5rem;
  }
`;

const LastLine = styled.p`
  margin-top: 1rem;
`;

const QualificationsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6rem;
`;

const TimelieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

const DownloadResume = styled.a`
  color: ${colors.fontBlack};
  padding: 0.5rem 1rem;
  margin: auto;
  width: 16rem;
  font-size: 1.5rem;
  line-height: 2rem;
  border-radius: 0.5rem;
  border: 2px solid ${colors.fontBlack};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: 150ms;

  &:hover {
    cursor: pointer;
    background-color: ${colors.fontBlack};
    color: ${colors.background};
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 12rem;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
  }
`;

const TheMakings = styled.img`
  display: block;
  @media (max-width: ${mobileBreakPoint}) {
    display: none;
  }
`;

const education = {
  title: "Education",
  info: [
    {
      institute: "Columbia University | Graduate School of Architecture, Planning & Preservation",
      qualification: "Master of Science in Computational Design",
      from: 2025,
      to: "Present",
    },
    {
      institute: "JNAFAU | Hyderabad",
      qualification: "Bachelor of Architecture",
      from: 2019,
      to: 2024,
    },
    {
      institute: "CEPT University",
      qualification: "Summer Winter School: Printmaking workshop - Etching and cynotype",
      from: 2020,
      to: 2023,
    },
    {
      institute: "+1 +2 | St.Andrews High School",
      qualification: "Maths, Physics, Chemistry, C++",
      from: 2019,
      to: 2020,
    },
  ],
};

const workExperience = {
  title: "Work Experience",
  info: [
    {
      institute: "LAD 360",
      qualification: "Junior Architect",
      from: 2024,
      to: "Present",
    },
    {
      institute: "National Association of Students of Architecture",
      qualification: "Student Delegate",
      from: 2023,
      to: 2024,
    },
  ],
};

const storyLine = [
  {
    src: robot,
    alt: "cardboard robot",
  },
  {
    src: PSP,
    alt: "PSP and PC with 256MB RAM",
  },
  {
    src: atmos,
    alt: "Atmos website",
  },
  {
    src: college,
    alt: "Sriya in her college",
  },
];

const About = () => {
  return (
    <Fragment>
      <StyledSection>
        <Intro>
          <IntroHero>
            <IntroHeroLine>
              About me<AccentText>?</AccentText>
            </IntroHeroLine>
            <IntroHeroLine>
              What can I say <AccentText>,</AccentText>
            </IntroHeroLine>
            <IntroHeroLine gap={"1rem"}>
              I just love <HeartBeat />
            </IntroHeroLine>
            <IntroHeroLine>
              building things<AccentText>.</AccentText>
            </IntroHeroLine>
          </IntroHero>
          <IntroContent>
            <StoryBlock storyLine={storyLine} />
            <IntroEnd>
              I am a Computational Design student at Columbia GSAPP, 
              driven by the meritocracy of ideas to solve complex spatial challenges through data and code. 
              My portfolio spans the development of parametric zoning tools and Web BIM interfaces and
              Visualizing trivariate environmental analysis in the South Bronx. 
              By combining an A+ academic standing in 'Leading Large Complex Projects' and 
              a professional experience on WAF-nominated adaptive reuse at Studio PKA, 
              I offer a unique synthesis of technical innovation, project management, and site-ready constructability.
              <LastLine>
                At the heart of it, I’m still doing what I love—bringing ideas
                to life through{" "}
                <b>
                  design<AccentText>+</AccentText>code<AccentText>.</AccentText>
                </b>
              </LastLine>
            </IntroEnd>
          </IntroContent>
        </Intro>
        <QualificationsWrapper>
          <TimelieWrapper>
            <Timeline
              title={workExperience.title}
              infoArray={workExperience.info}
            />
            <Timeline title={education.title} infoArray={education.info} />
          </TimelieWrapper>
          <TheMakings src={theMakings} alt="#The-Makings" />
        </QualificationsWrapper>
        <DownloadResume href={`${resume}?t=${new Date().getTime()}`} target="_blank" rel="noreferrer noopener">
          Download Resume
          <ArrowDownload24Filled />
        </DownloadResume>
      </StyledSection>
    </Fragment>
  );
};

export default About;
