import style from "./Nav.module.css";
import home from "../../assets/home.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const homeHandler = () => {
        navigate("/main")
    };
    return <div className={style.wrapper} onClick={homeHandler}>
        <img src={home} alt="home"/>
    </div>
};

export default Nav;