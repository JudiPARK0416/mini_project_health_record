import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import ChronicDisease from "./Pages/ChronicDisease";
import ClinicVisits from "./Pages/ClinicVisits";
import HealthCheck from "./Pages/HealthCheck";
import Vaccination from "./Pages/Vaccination";
import TotalList from "./Pages/TotalList";
import MyPage from "./Pages/MyPage";
import styled from "styled-components";

export const Features = styled.section`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [todoList, setTodoList] = useState();
  const [myInfo, setMyInfo] = useState();
  const [isPending, setIsPending] = useState(true)

  useEffect(()=>{
    fetch("http://localhost:3005/data/", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      setTodoList(data);
      fetch("http://localhost:3005/myInfo/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setMyInfo(data);
          setIsPending(false);
        });
    });
  },[])
  

  // console.log(todoList);
  // console.log(myInfo);

  return (
    <>
      {isPending || (
        <BrowserRouter>
          <Features>
            <Nav todoList={todoList} myInfo={myInfo} />
            <Routes>
              <Route
                path="/"
                element={
                  <TotalList
                    todoList={todoList}
                    setTodoList={setTodoList}
                    myInfo={myInfo}
                  />
                }
              />
              <Route
                path="/healthcheck"
                element={
                  <HealthCheck
                    todoList={todoList}
                    setTodoList={setTodoList}
                    myInfo={myInfo}
                  />
                }
              />
              <Route
                path="/vaccination"
                element={
                  <Vaccination
                    todoList={todoList}
                    setTodoList={setTodoList}
                    myInfo={myInfo}
                  />
                }
              />
              <Route
                path="/clinicvisits"
                element={
                  <ClinicVisits
                    todoList={todoList}
                    setTodoList={setTodoList}
                    myInfo={myInfo}
                  />
                }
              />
              <Route
                path="/chronicdisease"
                element={
                  <ChronicDisease
                    todoList={todoList}
                    setTodoList={setTodoList}
                    myInfo={myInfo}
                  />
                }
              />
              <Route
                path="/mypage"
                element={<MyPage myInfo={myInfo} setMyInfo={setMyInfo} />}
              />
            </Routes>
          </Features>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
