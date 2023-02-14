import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import TodoForm from "../TodoForm";
import EditTodo from "../EditTodo";

export const ChronicDiseaseContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;
export const ChronicDiseaseMain = styled.div`
  border-right: 2px solid #d0d0d0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const TodoBtn = styled.button`
  width: 150px;
  height: 70px;
  border-radius: 50px;
  font-size: 2rem;
  margin-right: 30px;
  font-weight: bold;
  border: none;
  &.done {
    background-color: white;
    color: blue;
    border: 5px solid blue;
  }
  &.todo {
    background-color: blue;
    color: white;
  }
`;
export const ContentName = styled.h2`
  font-size: 3rem;
  margin: 0;
  padding-bottom: 2px;
`;
export const Smallest = styled.span`
  font-weight: bold;
  width: 100px;
`;
export const MoreInfoLower = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    width: 250px;
    text-align: justify;
  }
`;
export const ContentUpper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 900px;
`;
export const More = styled.button`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  padding: 0 20px;
  border: none;
  background-color: white;
  color: #d9d9d9;
  :hover {
    color: gray;
  }
`;
export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px 10px 40px;
  border-bottom: 2px solid #d0d0d0;
  left: 0;
`;
export const StyledDiv = styled.div`
  font-size: 2rem;
  border: none;
  font-weight: bold;
  height: 38px;
  border-radius: 5px;
  margin: 3px;
  display: flex;
  align-items: center;
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
//! 여기 모달
// 모달을 누르면 뒤에 깔리는 불투명 회색 배경
export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
//! 여기 모달

const ChronicDisease = ({ todoList, setTodoList, myInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteClick = (e) => {
    fetch(`http://localhost:3005/data/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(() => {
        setTodoList(todoList.filter((todo) => todo.id !== e.target.id));
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    let editingTodo = todoList.filter((todo) => e.target.id === todo.id)[0];
    fetch(`http://localhost:3005/data/${e.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...editingTodo,
        done: editingTodo.done === true ? false : true,
      }),
    })
      .then(() => {
        setTodoList(
          todoList.map((todo) => {
            if (todo.id === e.target.id) {
              if (todo.done === true) todo.done = false;
              else todo.done = true;
            }
            return todo;
          })
        );
      })
      .catch((err) => console.log(err));
  };
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChronicDiseaseContainer>
        <Header
          text={"만성질환"}
          num={`${
            todoList.filter((todo) => todo.classification === "만성질환").length
          } 건`}
        />
        <ChronicDiseaseMain>
          <TodoForm
            todoList={todoList}
            setTodoList={setTodoList}
            myInfo={myInfo}
            onClick={handleChange}
          />
          <div>
            {todoList
              .filter((todo) => todo.classification === "만성질환")
              .map((todo, idx) => (
                <ContainerDiv key={idx}>
                  <TodoBtn
                    id={todo.id}
                    onClick={handleChange}
                    className={todo.done === true ? "done" : "todo"}
                  >
                    {todo.done === true ? "DONE" : "TODO"}
                  </TodoBtn>
                  <ContentSection>
                    <ContentUpper>
                      <ContentName>{todo.name}</ContentName>
                      <span>
                        <MoreInfoUpper>
                          <span>
                            <Smallest>내원사유</Smallest> {todo.classification}
                          </span>
                          <span>
                            <Smallest>결과</Smallest> -
                          </span>
                        </MoreInfoUpper>
                      </span>
                    </ContentUpper>
                    <MoreInfoLower>
                      <span>
                        <Smallest>날짜</Smallest> {todo.date}
                      </span>
                      <span>
                        <Smallest>병원명</Smallest> {todo.hospital}
                      </span>
                      <span>
                        <Smallest>진료과</Smallest> {todo.department}
                      </span>
                    </MoreInfoLower>
                  </ContentSection>
                  <More
                    onClick={openModalHandler}
                    id={todo.id}
                    className="fa-solid fa-ellipsis-vertical"
                  >
                    {isOpen ? (
                      <ModalBackdrop onClick={openModalHandler}>
                        <EditTodo
                          todo={todo}
                          todoList={todoList}
                          setTodoList={setTodoList}
                          myInfo={myInfo}
                          isOpen={isOpen}
                          setIsOpen={setIsOpen}
                        />
                      </ModalBackdrop>
                    ) : null}
                  </More>
                  <More
                    onClick={handleDeleteClick}
                    id={todo.id}
                    className="fa-solid fa-trash-can"
                  />
                </ContainerDiv>
              ))}
          </div>
        </ChronicDiseaseMain>
        <Footer />
      </ChronicDiseaseContainer>
    </>
  );
};

export default ChronicDisease;
