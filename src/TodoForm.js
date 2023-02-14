import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 30px;
  border-bottom: 2px solid #d0d0d0;
`;
export const AddBtn = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  font-size: 4rem;
  margin-right: 30px;
  background-color: #d9d9d9;
  border: none;
  color: white;
  :hover {
    background-color: white;
    color: #d9d9d9;
    border: 5px solid #d9d9d9;
  }
`;
export const InputContainerRight = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const InputContainerLeft = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const StyledInputName = styled.input`
  font-size: 3rem;
  width: 520px;
  border-radius: 5px;
  border: none;
  background: #dcdcdc;
  padding: 10px;
  ::placeholder {
    padding: 5px;
    color: #aeadad;
  }
  font-weight: bold;
  margin: 3px;
  flex-grow: 1;
`;
export const StyledInput = styled.input`
  font-size: 1.5rem;
  border: none;
  background: #dcdcdc;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  color: #aeadad;
  margin: 3px;
  padding: 5px;
`;
export const StyledInputDate = styled.input`
  font-size: 1.5rem;
  border: none;
  background: #dcdcdc;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  color: #aeadad;
  margin: 3px;
  padding: 0px 10px;
`;
export const StyledSelect = styled.select`
  font-size: 1.5rem;
  border: none;
  background: #dcdcdc;
  color: #aeadad;
  font-weight: bold;
  height: 40px;
  border-radius: 5px;
  width: 400px;
  margin: 3px;
  padding: 5px;
`;
export const StyledInputClass = styled.input`
  font-size: 2rem;
  border: none;
  font-weight: bold;
  height: 38px;
  border-radius: 5px;
  margin: 3px;
  display: flex;
  align-items: center;
`;
export const InputContentSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const MoreInfoUpper = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  span {
    width: 250px;
    padding-bottom: 2px;
  }
`;

const TodoForm = ({ todoList, setTodoList, myInfo }) => {
  const [contentName, setContentName] = useState("");
  const [date, setDate] = useState("");
  const [classification, setClassification] = useState("");
  const [hospital, setHospital] = useState("");
  const [department, setDepartment] = useState("");

  const AddNewTodo = (e) => {
    let newTodo = {
      id: uuidv4(),
      name: contentName,
      date: date,
      classification: classification,
      hospital: hospital,
      department: department,
      done: false,
    };
    fetch("http://localhost:3005/data/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then(() => {
        setTodoList([newTodo, ...todoList]);
      })
      .catch((err) => console.log("Error: ", err));
  };

  const handleChangeContentName = (e) => {
    setContentName(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleClassification = (e) => {
    setClassification(e.target.value);
  };
  const handleChangeHospital = (e) => {
    setHospital(e.target.value);
  };
  const handleChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };

  return (
    <FormContainer>
      <AddBtn onClick={AddNewTodo}>+</AddBtn>
      <InputContentSection>
        <InputContainerLeft>
          <StyledInputName
            placeholder="제목을 입력하세요"
            onChange={handleChangeContentName}
          />
          <MoreInfoUpper>
            <StyledInputDate type="date" onChange={handleChangeDate} />
          </MoreInfoUpper>
        </InputContainerLeft>
        <InputContainerRight>
          <StyledSelect onChange={handleClassification}>
            <option value="">분류를 입력하세요</option>
            <option value="건강검진">건강검진</option>
            <option value="예방접종">예방접종</option>
            <option value="기타내원">기타내원</option>
            <option value="만성질환">만성질환</option>
          </StyledSelect>
          <StyledSelect onChange={handleChangeHospital}>
            <option value="">병원명을 입력하세요</option>
            {myInfo.hospital.map((e, i) => (
              <option key={i} value={`${e}`}>
                {e}
              </option>
            ))}
          </StyledSelect>
          <StyledSelect onChange={handleChangeDepartment}>
            <option value="">진료과를 입력하세요</option>
            {myInfo.department.map((e, i) => (
              <option key={i} value={`${e}`}>
                {e}
              </option>
            ))}
          </StyledSelect>
        </InputContainerRight>
      </InputContentSection>
    </FormContainer>
  );
};

export default TodoForm;
