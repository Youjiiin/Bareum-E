import style from "./Main.module.css";
import mainImg from "../assets/mainImg.png";
import child1 from "../assets/mainChild1.png";
import child2 from "../assets/mainChild2.png";
import getUserInfo from "../assets/getUserInfo.png";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../Components/modal/ModalContainer";
import { useState } from "react";

const Main = () => {
    const[userName, setUserName] = useState('');
    const[userAge, setUserAge] = useState('');

    const navigate = useNavigate();
    const studyHandler = () => {
        navigate("/study");
    };

    const testHandler = () => {
        navigate("/test");
    };

    const [isOpen, setIsOpen] = useState(false);
    const modalState = () => {
        setIsOpen(true);
    };
    const inputNameHandler = (e) => {
        setUserName(localStorage.getItem('name'));
        setUserName(e.target.value);
    };
    const inputAgeHandler = (e) => {
        setUserAge(localStorage.getItem('age'));
        setUserAge(e.target.value);
    };
    const saveInfo = () => {
        localStorage.setItem('name', userName);
        localStorage.setItem('age', userAge);
        setIsOpen(false);
    };

    return <div className={style.wrapper} style={{ backgroundImage: `url(${mainImg})` }}>
        <h2>무엇을 해볼까요?</h2>

        <div className={style.btn_container}>
            <button 
            className={style.btn}
            onClick={studyHandler}>
            <img src={child1} alt="child1"/>
            공부하기</button>
            <button className={style.btn}
            onClick={testHandler}>
            <img src={child2} alt="child2"/>
            시험보기</button>
        </div>

        <ModalContainer
        isOpen={isOpen}
        setIsOpen={setIsOpen}>
            <p className={style.modal_title}>아이의 정보를 입력해주세요!</p>
            <div className={style.input_wrapper}>
                <p className={style.input_title}>이름</p>
                <input placeholder="이름" 
                    onChange={inputNameHandler}
                    value={userName}/>
                <p className={style.input_title}>나이</p>
                <input placeholder="만나이, 숫자만" 
                    onChange={inputAgeHandler}
                    value={userAge}/>
            </div>
            <button className={style.set_info_btn}
            onClick={saveInfo}>저장</button>
        </ModalContainer>

        <div className={style.getUserInfo} onClick={modalState}>
            <img src={getUserInfo} alt="getUserInfo"/>
        </div>
    </div>
};

export default Main;