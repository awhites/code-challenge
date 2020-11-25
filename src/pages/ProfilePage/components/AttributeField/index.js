import React from "react";
import styled from "styled-components";
import { H3, Body } from "../../../../components";

const Container = styled.div``;

export const AttributeField = ({ name, content }) => (
  <Container data-testid="attribute">
    <H3>{name}</H3>
    <Body>{content}</Body>
  </Container>
);
