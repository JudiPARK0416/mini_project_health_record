import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 982px;
  background: #e9e9e9;
  border: 2px solid #d0d0d0;
`;
export const SearchContainer = styled.div`
  width: 281px;
  height: 39px;
  background: #dcdcdc;
  border-radius: 9px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  input {
    font-size: 1.3rem;
    border: none;
    background: #dcdcdc;
  }
`;
export const SmallerButtonContainer = styled.div`
  display: flex;
  width: 281px;
  height: 160px;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const BiggerButtonContainer = styled.div`
  display: flex;
  width: 281px;
  #wideButton {
    width: 281px;
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 30px;
  width: 281px;
  height: 250px;
  .space_between {
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    justify-content: space-between;
  }
  .to_left {
    margin-top: 5px;
    margin-left: 5px;
    display: flex;
    justify-content: flex-start;
  }
  button {
    width: 135px;
    height: 70px;
    font-size: 1.3rem;
    border-radius: 9px;
    border: none;
    background: #d0d0d0;
    text-align: center;
  }
  .건강검진:hover {
    background-color: green;
    color: white;
  }
  .예방접종:hover {
    background-color: orange;
    color: white;
  }
  .기타내원:hover {
    background-color: red;
    color: white;
  }
  .만성질환:hover {
    background-color: blue;
    color: white;
  }
  .전체:hover {
    background-color: black;
    color: white;
  }
  .MyPage:hover {
    background-color: white;
    color: black;
    border: none;
  }
  .MyPage {
    background-color:  #e9e9e9;
    border: 3px solid #d0d0d0;
  }
`;
export const PersonalInfoContainer = styled.div`
  color: gray;
  margin-top: 20px;
  width: 281px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 180px;
  }
`;
export const PersonalInfoDiv = styled.div`
  width: 281px;
  left: 0;
  right: 30px;
  div {
    padding: 3px;
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
  }
`;
export const EmergencyContact = styled.div`
  color: gray;
  margin-top: 2rem;
  text-align: center;
  font-size: 1.3rem;
  width: 281px;
`;
export const StyledMiniButton = styled.button`
  font-size: 1rem;
  border-radius: 9px;
  border: none;
  background: #d0d0d0;
  text-align: center;
  height: 30px;
`;

const Nav = ({ todoList, myInfo }) => {
  return (
    <NavigationBar>
      <SearchContainer>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type={"text"} placeholder="검색"></input>
      </SearchContainer>
      <ButtonContainer>
        <SmallerButtonContainer>
          <Link to="/healthcheck">
            <button className="건강검진">
              <div className="space_between">
                <i className="fa-solid fa-circle-check"></i>
                <span>
                  {
                    todoList.filter((e) => e.classification === "건강검진")
                      .length
                  }
                </span>
              </div>
              <div className="to_left">건강검진</div>
            </button>
          </Link>
          <Link to="/vaccination">
            <button className="예방접종">
              <div className="space_between">
                <i className="fa-solid fa-syringe"></i>
                <span>
                  {
                    todoList.filter((e) => e.classification === "예방접종")
                      .length
                  }
                </span>
              </div>
              <div className="to_left">예방접종</div>
            </button>
          </Link>
          <Link to="/clinicvisits">
            <button className="기타내원">
              <div className="space_between">
                <i className="fa-solid fa-circle-h"></i>
                <span>
                  {
                    todoList.filter((e) => e.classification === "기타내원")
                      .length
                  }
                </span>
              </div>
              <div className="to_left">기타내원</div>
            </button>
          </Link>
          <Link to="/chronicdisease">
            <button className="만성질환">
              <div className="space_between">
                <i className="fa-solid fa-capsules"></i>
                <span>
                  {
                    todoList.filter((e) => e.classification === "만성질환")
                      .length
                  }
                </span>
              </div>
              <div className="to_left">만성질환</div>
            </button>
          </Link>
        </SmallerButtonContainer>
        <SmallerButtonContainer>
          <Link to="/">
            <button className="전체">
              <div className="space_between">
                <i></i>
                <span>{todoList.length}</span>
              </div>
              <div className="to_left">전체</div>
            </button>
          </Link>
          <Link to="/mypage">
            <button className="MyPage">
              <div className="space_between"></div>
              <div>마이페이지</div>
            </button>
          </Link>
        </SmallerButtonContainer>
      </ButtonContainer>
      <PersonalInfoContainer>
        <img src="user.png" alt="avatar" />
        <PersonalInfoDiv>
          <div>
            <span>
              <strong>이름</strong>
            </span>
            <span>{myInfo.name}</span>
          </div>
          <div>
            <span>
              <strong>생년월일</strong>
            </span>
            <span>{myInfo.dob}</span>
          </div>
          <div>
            <span>
              <strong>성별</strong>
            </span>
            <span>{myInfo.sex}</span>
          </div>
          <div>
            <span>
              <strong>혈액형</strong>
            </span>
            <span>{myInfo.bloodType}</span>
          </div>
          <div>
            <span>
              <strong>알레르기</strong>
            </span>
            <span>{myInfo.allergy}</span>
          </div>
          <div>
            <span>
              <strong>의학적 질환</strong>
            </span>
            <span>{myInfo.diagnosed}</span>
          </div>
          <div>
            <span>
              <strong>의료기록</strong>
            </span>
            <span>{myInfo.medicalRecord}</span>
          </div>
          <div>
            <span>
              <strong>몸무게</strong>
            </span>
            <span>{myInfo.weight}kg</span>
          </div>
          <div>
            <span>
              <strong>신장</strong>
            </span>
            <span>{myInfo.height}cm</span>
          </div>
        </PersonalInfoDiv>
      </PersonalInfoContainer>
      <EmergencyContact>
        <div>
          <strong>보호자 연락처</strong>
        </div>
        <div>{myInfo.emergenctContact}</div>
      </EmergencyContact>
    </NavigationBar>
  );
};

export default Nav;
