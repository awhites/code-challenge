import styled from "styled-components";

const globalTextStyle = () => `
    color: #2d3649;
`;

export const H1 = styled.h1`
  ${globalTextStyle}
  font-weight: 500;
  font-size: 32px;
`;
export const H2 = styled.h2`
  ${globalTextStyle}
  font-weight: 500;
  font-size: 19px;
`;

export const H3 = styled.h3`
  ${globalTextStyle}
  font-size: 14px;
`;

export const Body = styled.p`
  ${globalTextStyle}
  font-size: 14px;
`;
