import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 130px;
  font-size: 2rem;
  font-size: 2rem;
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
  .green {
    color: green;
  }
  .orange {
    color: orange;
  }
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .black {
    color: black;
  }
  .none {
    display: none;
  }
`;

const Header = ({ text, num }) => {
  return (
    <StyledHeader>
      <span
        className={
          text === "전체"
            ? "black"
            : text === "건강검진"
            ? "green"
            : text === "예방접종"
            ? "orange"
            : text === "기타내원"
            ? "red"
            : text === "만성질환"
            ? "blue"
            : "black"
        }
      >
        <strong>{text}</strong>
      </span>
      <span>
        <strong>{num}</strong>
      </span>
    </StyledHeader>
  );
};

export default Header;
