import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";

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
`;
export const AddBtn = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  font-size: 4rem;
  margin-right: 30px;
`;
export const ContentName = styled.h2`
  font-size: 3rem;
  margin: 0;
  padding-bottom: 2px;
`;
export const StyledInputName = styled.input`
  font-size: 3rem;
  width: 520px;
  border-radius: 5px;
  border: none;
  background: #dcdcdc;
  ::placeholder {
    padding: 5px;
    color: #aeadad;
  }
  font-weight: bold;
  margin: 3px;
  flex-grow: 1;
`;
export const Smallest = styled.span`
  font-weight: bold;
  width: 100px;
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
export const InputContentSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

`;
export const More = styled.span`
  font-size: 3rem;
  padding: 0 20px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 30px;

  border-bottom: 2px solid #d0d0d0;
`;
export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px;
  border-bottom: 2px solid #d0d0d0;
  left: 0;
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

const ChronicDisease = ({ todoList, setTodoList, myInfo }) => {
  return (
    <>
      <ChronicDiseaseContainer>
        <Header text={"만성질환"} num={todoList.filter(todo => todo.classification==="만성질환").length}/>
        <ChronicDiseaseMain>
          <FormContainer>
            <AddBtn>+</AddBtn>
            <InputContentSection>
              <InputContainerLeft>
                <StyledInputName placeholder="제목을 입력하세요" />
                <MoreInfoUpper>
                  <StyledInput type="datetime-local" />
                </MoreInfoUpper>
              </InputContainerLeft>
              <InputContainerRight>
                <StyledSelect>
                  <option value="">분류를 입력하세요</option>
                  <option value="건강검진">건강검진</option>
                  <option value="예방접종">예방접종</option>
                  <option value="기타내원">기타내원</option>
                  <option value="만성질환">만성질환</option>
                </StyledSelect>
                <StyledSelect>
                  <option value="">병원명을 입력하세요</option>
                  <option value="서울대학교병원">서울대학교병원</option>
                  <option value="이대서울병원">이대서울병원</option>
                </StyledSelect>
                <StyledSelect>
                  <option value="">진료과를 입력하세요</option>
                  <option value="서울대학교병원">호흡기내과</option>
                  <option value="세브란스병원">순환기내과</option>
                </StyledSelect>
              </InputContainerRight>
            </InputContentSection>
          </FormContainer>
          <div>
            {todoList.filter(todo => todo.classification==="만성질환").map((todo, idx)=>
            <ContainerDiv key={idx}>
              <TodoBtn>TODO</TodoBtn>
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
              <More>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </More>
            </ContainerDiv>)}
          </div>
        </ChronicDiseaseMain>
        <Footer />
      </ChronicDiseaseContainer>
    </>
  );
};

export default ChronicDisease;
