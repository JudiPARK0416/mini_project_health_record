import React from "react";
import Footer from "../Footer"
import Header from "../Header";

const MyPage = ({ myInfo, setMyInfo }) => {
    return (
        <>
            <Header text={"개인정보 수정"}/>
            개인정보 수정
            자주가는 병원 추가
            자주가는 진료과 추가
            <Footer/>
        </>
    );
};

export default MyPage;
