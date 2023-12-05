import { useNavigate } from "react-router-dom";
import loading from "../assets/loading.png";
import style from "./Loading.module.css";

const Main = () => {
    const navigate = useNavigate();
    const mainHandler = () => {
        navigate("/main");
    };

    return <div className={style.wrapper}>
        <img src={loading} alt="loading" onClick={mainHandler}/>
        <p>Bareum:E <br/>
            바름이랑 같이 공부해요
        </p>
    </div>
}

export default Main;