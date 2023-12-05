import style from "./Main.module.css";
import mainImg from "../assets/mainImg.png";
import child1 from "../assets/mainChild1.png";
import child2 from "../assets/mainChild2.png";
import getUserInfo from "../assets/getUserInfo.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const studyHandler = () => {
        navigate("/study");
    };

    const testHandler = () => {
        navigate("/test");
    };

    return <div className={style.wrapper} style={{ backgroundImage: `url(${mainImg})` }}>
        <p>무엇을 해볼까요?</p>

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

        <div className={style.getUserInfo}>
            <img src={getUserInfo} alt="getUserInfo"/>
        </div>
    </div>
};

export default Main;