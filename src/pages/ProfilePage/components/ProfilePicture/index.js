import React from "react";
import styled from "styled-components";

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 33%;
`;

export const ProfilePicture = ({ src }) => <ProfileImg src={src} />;
