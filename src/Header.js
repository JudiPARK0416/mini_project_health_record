import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 130px;
  font-size: 2rem;
  font-size: 2rem;
  color: red;
  display: flex;
  padding: 20px 40px 0px 40px;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #d0d0d0;
  border-bottom: 2px solid #d0d0d0;
  border-right: 2px solid #d0d0d0;
  font-size: 4rem;
  position: static;
  top: 0px;
`;

const Header = ({ text, num }) => {
  return (
    <StyledHeader>
      <span><strong>{text}</strong></span>
      <span><strong>{num}</strong>건</span>
    </StyledHeader>
  );
};

export default Header;
