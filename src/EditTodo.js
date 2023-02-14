import { useState } from "react";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 30px;
  padding-top: 30px;
  border-bottom: 2px solid #d0d0d0;
  background-color: white;
  border-radius: 10px;
`;
export const EditBtn = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: bold;
  margin: 20px;
  background-color: gray;
  border: none;
  color: white;
  :hover {
    background-color: white;
    color: gray;
    border: 5px solid gray;
  }
  :active {
    background-color: white;
    color: gray;
    border: 5px solid gray;
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
  color: black;
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
  color: black;
  margin: 3px;
  padding: 0px 10px;
`;
export const StyledSelect = styled.select`
  font-size: 1.5rem;
  border: none;
  background: #dcdcdc;
  color: black;
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
  padding-right: 10px;
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
export const StyledTitle = styled.div`
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: black;
`;

const EditTodo = ({
  todo,
  todoList,
  setTodoList,
  myInfo,
  isOpen,
  setIsOpen,
}) => {
  let options = ["건강검진", "예방접종", "기타내원", "만성질환"];
  const [item, setItem] = useState(todo);

  const nameChangeHandler = (e) => {
    setItem({ ...item, name: e.target.value });
    // console.log(e.target.id)
  };
  const dateChangeHandler = (e) => {
    setItem({ ...item, date: e.target.value });
  };
  const classificationChangeHandler = (e) => {
    setItem({ ...item, classification: e.target.value });
  };
  const hospitalChangeHandler = (e) => {
    setItem({ ...item, hospital: e.target.value });
  };
  const departmentChangeHandler = (e) => {
    setItem({ ...item, department: e.target.value });
  };

  const handleChange = (e) => {
    fetch(`http://localhost:3005/data/${e.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then(() => {
        setTodoList(
          todoList.map((todo) => {
            if (todo.id === item.id) todo = item;
            return todo;
          })
        );
      })
      .catch((err) => console.log(err));
    setIsOpen(!isOpen);
  };

  return (
    <FormContainer onClick={(event) => event.stopPropagation()}>
      <StyledTitle>상세정보 편집</StyledTitle>
      <InputContentSection>
        <InputContainerLeft>
          <StyledInputName
            onChange={nameChangeHandler}
            value={item.name}
          ></StyledInputName>
          <MoreInfoUpper>
            <StyledInputDate
              type="date"
              onChange={dateChangeHandler}
              value={item.date}
            />
          </MoreInfoUpper>
        </InputContainerLeft>
        <InputContainerRight>
          <StyledSelect onChange={classificationChangeHandler}>
            {options.map((classification) => (
              <option value={classification}>{classification}</option>
            ))}
          </StyledSelect>
          <StyledSelect onChange={hospitalChangeHandler}>
            {myInfo.hospital.map((hospital) => (
              <option value={`${hospital}`}>{hospital}</option>
            ))}
          </StyledSelect>
          <StyledSelect onChange={departmentChangeHandler}>
            {myInfo.department.map((department) => (
              <option value={`${department}`}>{department}</option>
            ))}
          </StyledSelect>
        </InputContainerRight>
      </InputContentSection>
      <EditBtn key={todo.id} id={todo.id} onClick={handleChange}>
        수정하기
      </EditBtn>
    </FormContainer>
  );
};

export default EditTodo;
