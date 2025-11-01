import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import EarthCanvas from "../canvas/Earth";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 50px 20px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
      <Title>Education</Title>
      <Desc>
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </Desc>
      <VerticalTimeline>
        {education.map((item, index) => (
          <EducationCard key={index} education={item} />
        ))}
      </VerticalTimeline>
      <br /><br />
      <EarthCanvas />
      </Wrapper>
    </Container>
  );
};

export default Education;
