import { useState } from "react";
import style from "./Test.module.css";
import testImg from "../../assets/testImg.png";
import Nav from "../../Components/navBar/Nav";
import record from "../../assets/record.png";
import check from "../../assets/check.png";

const Test = () => {
    const [testStep, SetTestStep] = useState(0);
    const step1 = testStep === 0 ? style.progress_now : style.progress;
    const step2 = testStep === 1 ? style.progress_now : style.progress;
    const step3 = testStep === 2 ? style.progress_now : style.progress;

    return <div className={style.wrapper} style={{ backgroundImage: `url(${testImg})` }}>
        <h2>직접 따라 읽어봐요!</h2>
        <div className={style.progress_container}>
            <div className={step1}>1</div>
            <div className={step2}>2</div>
            <div className={step3}>3</div>
        </div>
        <div className={style.question}>여기는 문제가 나오는 곳입니다.</div>
        
        <div className={style.test_container}>
            <div className={style.record_container}>
                <img src={record} alt="record"/>
                <span>말하기</span>
            </div>

            <div className={style.record_container}>
                <img src={check} alt="check"/>
                <span>확인하기</span>
            </div>
        </div>

        <Nav 
        testStep={testStep} 
        SetTestStep={SetTestStep}/>
    </div>
};

export default Test;