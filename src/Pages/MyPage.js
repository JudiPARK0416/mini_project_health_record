import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";

export const MyPageContainer = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
export const MyPageMain = styled.div`
  border-right: 2px solid #d0d0d0;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  flex-grow: 1;
`;
export const Container = styled.div`
  height: 30px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  margin-bottom: 10px;
  position: relative;
  > {
  }
`;
export const Span = styled.span`
  height: 20px;
  width: 200px;
  font-size: 1.3rem;
  text-align: start;
  line-height: 20px;
  padding-top: 5px;
  padding-bottom: 3px;
`;
export const WiderSpan = styled.span`
  height: 20px;
  width: 300px;
  font-size: 1.3rem;
  text-align: start;
  line-height: 20px;
  padding-top: 5px;
  padding-bottom: 3px;
`;
export const Input = styled.input`
  font-size: 1.3rem;
  width: 200px;
  border: 2px solid #d0d0d0;
`;
export const Select = styled.select`
  font-size: 1.3rem;
  width: 200px;
  border: 2px solid #d0d0d0;
`;
export const Button = styled.button`
  font-size: 1.3rem;
  width: 100px;
  margin: 30px;
  background-color: #e9e9e9;
  border: 2px solid #e9e9e9;
  border-radius: 5px;
  :hover {
    background-color: white;
    color: black;
    border: 2px solid #d0d0d0;
  }
`;

const MyPage = ({ myInfo, setMyInfo }) => {
  const [item, setItem] = useState(myInfo);

  const nameChangeHandler = (e) => {
    setItem({ ...myInfo, name: e.target.value });
  };
  const dobChangeHandler = (e) => {
    setItem({ ...myInfo, dob: e.target.value });
  };
  const sexChangeHandler = (e) => {
    setItem({ ...myInfo, sex: e.target.value });
  };
  const bloodTypeChangeHandler = (e) => {
    setItem({ ...myInfo, bloodType: e.target.value });
  };
  const allergyChangeHandler = (e) => {
    setItem({ ...myInfo, allergy: e.target.value });
  };
  const diagnosedChangeHandler = (e) => {
    setItem({ ...myInfo, diagnosed: e.target.value });
  };
  const medicalRecordChangeHandler = (e) => {
    setItem({ ...myInfo, medicalRecord: e.target.value });
  };
  const weightChangeHandler = (e) => {
    setItem({ ...myInfo, weight: e.target.value });
  };
  const heightChangeHandler = (e) => {
    setItem({ ...myInfo, height: e.target.value });
  };
  const emergencyContactChangeHandler = (e) => {
    setItem({ ...myInfo, emergenctContact: e.target.value });
  };

  const handleChange = (e) => {
    fetch(`http://localhost:3005/myInfo/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then(() => {
        setMyInfo({
          ...myInfo,
          name: item.name,
          dob: item.dob,
          sex: item.sex,
          bloodType: item.bloodType,
          allergy: item.allergy,
          diagnosed: item.diagnosed,
          medicalRecord: item.medicalRecord,
          weight: item.weight,
          height: item.height,
          emergenctContact: item.emergenctContact,
          hospital: item.hospital,
          department: item.department,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <MyPageContainer onClick={(event) => event.stopPropagation()}>
        <Header text={"개인정보"} />
        <MyPageMain>
          <Container>
            <Span>이름</Span>
            <WiderSpan>
              <strong>{item.name}</strong>
            </WiderSpan>
            <Input onChange={nameChangeHandler} value={item.name}></Input>
          </Container>
          <Container>
            <Span>생년월일</Span>
            <WiderSpan>
              <strong>{item.dob}</strong>
            </WiderSpan>
            <Input
              type="date"
              onChange={dobChangeHandler}
              value={item.dob}
            ></Input>
          </Container>
          <Container>
            <Span>성별</Span>
            <WiderSpan>
              <strong>{item.sex}</strong>
            </WiderSpan>
            <Select onChange={sexChangeHandler} value={item.sex}>
              <option value="">성별을 입력하세요</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </Select>
          </Container>
          <Container>
            <Span>혈액형</Span>
            <WiderSpan>
              <strong>{item.bloodType}</strong>
            </WiderSpan>
            <Select onChange={bloodTypeChangeHandler} value={item.bloodType}>
              <option value="">혈액형을 입력하세요</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
              <option value="O">O-</option>
            </Select>
          </Container>
          <Container>
            <Span>알레르기</Span>
            <WiderSpan>
              <strong>{item.allergy}</strong>
            </WiderSpan>
            <Input onChange={allergyChangeHandler} value={item.allergy}></Input>
          </Container>
          <Container>
            <Span>의학적 질환</Span>
            <WiderSpan>
              <strong>{item.diagnosed}</strong>
            </WiderSpan>
            <Input
              onChange={diagnosedChangeHandler}
              value={item.diagnosed}
            ></Input>
          </Container>
          <Container>
            <Span>의료기록</Span>
            <WiderSpan>
              <strong>{item.medicalRecord}</strong>
            </WiderSpan>
            <Input
              onChange={medicalRecordChangeHandler}
              value={item.medicalRecord}
            ></Input>
          </Container>
          <Container>
            <Span>몸무게</Span>
            <WiderSpan>
              <strong>{item.weight}kg</strong>
            </WiderSpan>
            <Input
              onChange={weightChangeHandler}
              type="number"
              value={item.weight}
            ></Input>
          </Container>
          <Container>
            <Span>신장</Span>
            <WiderSpan>
              <strong>{item.height}cm</strong>
            </WiderSpan>
            <Input
              onChange={heightChangeHandler}
              type="number"
              value={item.height}
            ></Input>
          </Container>
          <Container>
            <Span>보호자 연락처</Span>
            <WiderSpan>
              <strong>{item.emergenctContact}</strong>
            </WiderSpan>
            <Input
              value={item.emergenctContact}
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              onChange={emergencyContactChangeHandler}
            ></Input>
          </Container>
          <Button onClick={handleChange}>수정하기</Button>
        </MyPageMain>
        <Footer />
      </MyPageContainer>
    </>
  );
};

export default MyPage;
