import React from "react";
import styled from "styled-components";
import { Card, H1, H2, Body } from "../../../../components";
import { ProfilePicture, ExperienceField, AttributeField } from "../";

const Section = styled.div`
  width: 80%;
  border-bottom: 1px solid #e1e7f4;
`;
const ProfileSection = ({ title, children }) => (
  <Section>
    <H2>{title}</H2>
    {children}
  </Section>
);

const Wrapper = styled(Card)`
  width: 400px;
  margin: auto;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProfileCard = ({
  name,
  recentAccomplishment,
  experience,
  attributes,
  profileUrl,
}) => (
  <Wrapper>
    <ProfilePicture src={profileUrl} />
    <H1>{name}</H1>

    <ProfileSection title="Areas of Expertise 👓">
      {experience.map((experience, i) => (
        <ExperienceField
          key={`exp-${i}`}
          field={experience.field}
          years={experience.years}
        />
      ))}
    </ProfileSection>

    <ProfileSection title="Recent Accomplishment ⭐">
      <Body>{recentAccomplishment}</Body>
    </ProfileSection>

    <ProfileSection title="Great Fit 👍">
      {attributes.map((attribute, j) => (
        <AttributeField
          key={`attr-${j}`}
          name={attribute.name}
          content={attribute.content}
        />
      ))}
    </ProfileSection>
  </Wrapper>
);
