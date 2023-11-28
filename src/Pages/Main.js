import style from "./Main.module.css";
import mainImg from "../assets/mainImg.png";

const Main = () => {
    return <div className={style.wrapper}>
        <div className={style.title}>
            <img src={mainImg} alt="main"/>
            <p>무엇을 해볼까요?</p>
        </div>
        
        <div className={style.btn_container}>
            <button className={style.btn_study}>공부</button>
            <button className={style.btn_test}>시험</button>
        </div>
    </div>
};

export default Main;