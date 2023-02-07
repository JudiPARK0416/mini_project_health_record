import React from "react";
import styled from "styled-components";
export const StyledFooter = styled.footer`
  height: 57px;
  background: #e9e9e9;
  bottom: 0;
  font-size: 1.5rem;
  color: gray;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: flex-end;
  border-top: 2px solid #d0d0d0;
  border-bottom: 2px solid #d0d0d0;
  border-right: 2px solid #d0d0d0;
`;

const Footer = () => {
  return <StyledFooter><strong>Copyright @ 2023 JudiPARK0416</strong></StyledFooter>;
};

export default Footer;
