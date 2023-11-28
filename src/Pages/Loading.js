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
    </div>
}

export default Main;