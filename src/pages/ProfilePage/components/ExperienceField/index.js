import React from "react";
import styled from "styled-components";
import { H3, Body } from "../../../../components";

const Container = styled.div``;

export const ExperienceField = ({ field, years }) => (
  <Container data-testid={"experience"}>
    <H3>{field}</H3>
    <Body>{years} Years</Body>
  </Container>
);
