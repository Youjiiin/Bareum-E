import style from "./Study.module.css";
import studyImg from "../../assets/studyImg.png";
import studyImgWebp from "../../assets/studyImg.webp";
import { useState } from "react";
import Nav from "../../Components/navBar/Nav.js";
import Audio2 from "../../Components/audio/AudioPlayer.js";
import Audio1 from "../../Components/audio/Audio.js";
import Audio3 from "../../Components/audio/Audio3.js";

const Study = () => {
    const [studyStep, SetStudyStep] = useState(0);
    const [answer, setAnswer] = useState(false);

    // WebP 지원 여부를 확인
    const supportsWebP = () => {
        const elem = document.createElement('canvas');
        if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        }
        // very old browser like IE 8, canvas not supported
        return false;
    };

    const answerHandler = () => {
        setAnswer(!answer);
    };

    let audioFile;
    switch (studyStep) {
        case 0:
            audioFile = <Audio1 studyStep={studyStep}/>;
            break;
        case 1:
            audioFile = <Audio2 studyStep={studyStep}/>;
            break;
        case 2:
            audioFile = <Audio3 studyStep={studyStep}/>;
            break;
        default:
            audioFile = <Audio1 studyStep={studyStep}/>;
    };
    
    const backgroundImageUrl = supportsWebP() ? studyImgWebp : studyImg;

    const TEXT1 = "오늘은 친구들이랑 놀이터에서 놀았어요";
    const TEXT2 = "공은 무슨 모양이에요?";
    const TEXT3 = "사과는 무슨색이야?";
    const TEXT = [TEXT1, TEXT2, TEXT3];

    const ANSWER1 = "공은 동그래요";
    const ANSWER2 = "빨간색이에요";
    const ANSWER_ARRAY = [ANSWER1, ANSWER2];

    const step1 = studyStep === 0 ? style.progress_now : style.progress;
    const step2 = studyStep === 1 ? style.progress_now : style.progress;
    const step3 = studyStep === 2 ? style.progress_now : style.progress;

    return <div className={style.wrapper} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <p className={style.title}>문장을 따라 읽어 볼까요?</p>
        <div className={style.progress_container}>
            <div className={step1}>1</div>
            <div className={step2}>2</div>
            <div className={step3}>3</div>
        </div>

        <div className={style.study_text}>
            <p className={style.study_question}>{TEXT[studyStep]}</p>
            {studyStep !== 0 && 
            <div className={style.study_answer}>
            {answer? <div onClick={answerHandler} className={style.more}>-</div> : <div onClick={answerHandler} className={style.more}>+</div>}
            {answer && <p className={style.answer_text}>{ANSWER_ARRAY[studyStep - 1]}</p>}
            </div>}
        </div>
        {audioFile}
        <Nav 
            studyStep={studyStep}
            SetStudyStep={SetStudyStep}/>
    </div>
};

export default Study;