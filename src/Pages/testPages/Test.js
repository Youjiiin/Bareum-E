import { useState } from "react";
import style from "./Test.module.css";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
import Nav from "../../Components/navBar/Nav";

const Test = () => {
    const [step, setStep] = useState(0);
    const [grade, setGrade] = useState(false);
    
    const nextStepHandler = () => {
        setStep(step + 1);
        if (step >= 2) {
            setStep(2);
        }
    }
    const prevStepHandler = () => {
        setStep(step - 1);
        if (step <= 0) {
            setStep(0);
        }
    }
    const step1 = step === 0 ? style.progress_now : style.progress;
    const step2 = step === 1 ? style.progress_now : style.progress;
    const step3 = step === 2 ? style.progress_now : style.progress;
    return <div className={style.wrapper}>
        <h2>문제 {step + 1}</h2>
        <div className={style.progress_container}>
            <div className={step1}>1</div>
            <div className={step2}>2</div>
            <div className={step3}>3</div>
        </div>
        <div className={style.question}>여기는 문제가 나오는 곳입니다.</div>
        <button className={style.record_btn}>말하기</button>
        <button className={style.submit_btn}>채점하기</button>
        <div className={style.controller_container}>
            <div className={style.controller} onClick={prevStepHandler}>
                <img src={prev} alt="prev"/>
            </div>
            <Nav />
            <div className={style.controller} onClick={nextStepHandler}>
                <img src={next} alt="next"/>
            </div>
        </div>
    </div>
};

export default Test;