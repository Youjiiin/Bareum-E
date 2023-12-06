import style from "./Nav.module.css";
import home from "../../assets/home.png";
import next from "../../assets/next.png";
import prev from "../../assets/prev.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Nav = (props) => {
    const navigate = useNavigate();
    const homeHandler = () => {
        navigate("/main")
    };

    const nextStepHandler = () => {
        if (window.location.pathname === "/study") {
            props.SetStudyStep(props.studyStep + 1);
            if (props.studyStep >= 2) {
                props.SetStudyStep(2);
            }
        } else if (window.location.pathname === "/test") {
            props.SetTestStep(props.testStep + 1);
            if (props.testStep >= 2) {
                props.SetTestStep(2);
            }
        }
    }
    const prevStepHandler = () => {
        if (window.location.pathname === "/study") {
            props.SetStudyStep(props.studyStep - 1);
            if (props.studyStep <= 0) {
                props.SetStudyStep(0);
            }
        } else if (window.location.pathname === "/test") {
            props.SetTestStep(props.testStep - 1);
            if (props.testStep <= 0) {
                props.SetTestStep(0);
            }
        }
    }

    return <div className={style.nav_container}>
        <div className={style.wrapper} 
        onClick={prevStepHandler}>
            <img src={prev} alt="prev"/>
        </div>
        <div className={style.wrapper} 
            onClick={homeHandler}>
            <img src={home} alt="home"/>
        </div>
        <div className={style.wrapper} 
        onClick={nextStepHandler}>
            <img src={next} alt="next"/>
        </div>
    </div>
};

export default Nav;