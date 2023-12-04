import style from "./Main.module.css";
import mainImg from "../assets/mainImg.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const studyHandler = () => {
        navigate("/study");
    };

    const testHandler = () => {
        navigate("/test");
    };

    return <div className={style.wrapper}>
        <div className={style.title}>
            <img src={mainImg} alt="main"/>
            <p>무엇을 해볼까요?</p>
        </div>

        <div className={style.btn_container}>
            <button 
            className={style.btn_study}
            onClick={studyHandler}>공부</button>
            <button className={style.btn_test}
            onClick={testHandler}>시험</button>
        </div>
    </div>
};

export default Main;