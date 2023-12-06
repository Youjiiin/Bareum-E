import style from "./Study.module.css";
import studyImg from "../../assets/studyImg.png";
import next from "../../assets/next.png";
import prev from "../../assets/prev.png"
import { useState } from "react";
import Nav from "../../Components/navBar/Nav.js";
import AudioPlayer from "../../Components/audio/AudioPlayer.js";

const Study = () => {
    const [studyStep, SetStudyStep] = useState(0);

    const TEXT1 = "여기에 무엇을 쓰는게 좋을까요?";
    const TEXT2 = "두번째 문장인데 이거는 뭘로할까요?";
    const TEXT3 = "이쯤되니 할말도 없어지네요";
    const TEXT = [TEXT1, TEXT2, TEXT3];

    const step1 = studyStep === 0 ? style.progress_now : style.progress;
    const step2 = studyStep === 1 ? style.progress_now : style.progress;
    const step3 = studyStep === 2 ? style.progress_now : style.progress;

    return <div className={style.wrapper} style={{ backgroundImage: `url(${studyImg})` }}>
        <p className={style.title}>문장을 따라 읽어 볼까요?</p>
        <div className={style.progress_container}>
            <div className={step1}>1</div>
            <div className={step2}>2</div>
            <div className={step3}>3</div>
        </div>

        <div className={style.study_text}>{TEXT[studyStep]}</div>
        <AudioPlayer />
        <Nav 
            studyStep={studyStep}
            SetStudyStep={SetStudyStep}/>
    </div>
};

export default Study;