import { useEffect, useState } from "react";
import style from "./Test.module.css";
import testImg from "../../assets/testImg.png";
import testImgWebP from "../../assets/testImg.webp";
import Nav from "../../Components/navBar/Nav";
import record from "../../assets/record.png";
import check from "../../assets/check.png";
import stop from "../../assets/stop.png";
import bear from "../../assets/bear.png";
import teacher from "../../assets/teacher.png";
import ModalContainer from "../../Components/modal/ModalContainer";
import { useNavigate } from "react-router-dom";

const Test = () => {
    const [isRecord, setIsRecord] = useState(false);
    const [testStep, setTestStep] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [isRecorded, setIsRecorded] = useState(false);
    const navigate = useNavigate();

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
    
    const backgroundImageUrl = supportsWebP() ? testImgWebP : testImg;

    const modalState = () => {
        if (isRecorded) {
            setIsOpen(true);
        } else {
            alert("녹음 먼저 해주세요!");
        }
    };

    const studyHandler = () => {
        navigate("/study");
    };

    const step1 = testStep === 0 ? style.progress_now : style.progress;
    const step2 = testStep === 1 ? style.progress_now : style.progress;
    const step3 = testStep === 2 ? style.progress_now : style.progress;

    const recordHandler = () => {
        setIsRecord(!isRecord);
        setIsRecorded(true);
    };

    const TEXT1 = "오늘은 친구들이랑 놀이터에서 놀았어요";
    const TEXT2 = "공은 무슨 모양이에요?";
    const TEXT3 = "귤은 무슨색이야?";
    const TEXT = [TEXT1, TEXT2, TEXT3];

    const COMMENT1 = "아이의 발음 : 오늘은 친구들이랑 놀이터에서 놀았어요 \n발음 점수 : A \n발음 교정해야 될 부분 : 없음 \n발음을 잘할 수 있는 팁 : 이미 정확한 발음을 하고 있으니, 이 발음을 유지하며 자신감을 가지고 말하는 연습을 계속해보세요.";

    const COMMENT2 = "정답 : X \n아이의 발음 : 공무원 동그레이오 \n발음 점수 : B \n발음 교정해야 될 부분 : '공은'을 '공무원'으로, '동그래요'를 '동그레이오'로 잘못 발음하였습니다. \n발음을 잘할 수 있는 팁 : 정확한 발음을 위해서는 단어의 각 글자를 천천히, 분명하게 발음하는 연습이 필요해요. '공은'과 '동그래요'를 또박또박 연습하면서 발음의 차이를 느껴보세요. 또한, 발음이 헷갈릴 때는 단어를 눈으로 보면서 입 모양과 혀의 위치를 확인하며 발음해보는 것도 도움이 됩니다.";

    const COMMENT3 = '정답 : O \n아이의 발음 : 귤은 주황색이에요 \n발음 점수 : A \n발음 교정해야 될 부분 : 없음 \n발음을 잘할 수 있는 팁 : 아주 잘하고 있어요! 또박또박 천천히 발음하는 연습을 계속하면 더욱 발음이 명확해질 거예요.';

    const COMMENT = [COMMENT1, COMMENT2, COMMENT3];

    const [dots, setDots] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length < 3 ? prev + '.' : ''));
        }, 500); 
        return () => clearInterval(interval); 
    }, []);
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {setIsConfirm(true)}, 5000);
        } else {
            setIsConfirm(false);
        }
    }, [isOpen]);

    return <div className={style.wrapper} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        {testStep === 0 ? <h2>직접 따라 읽어봐요!</h2> : <h2>질문에 답해 봐요!</h2>}
        <div className={style.progress_container}>
            <div className={step1}>1</div>
            <div className={step2}>2</div>
            <div className={step3}>3</div>
        </div>
        <div className={style.question}>{TEXT[testStep]}</div>
        
        <div className={style.test_container}>
            <div className={style.record_container} onClick={recordHandler}>
                {isRecord ? (<>
                    <img src={stop} alt="stop"/>
                    <span>멈추기</span>
                </>)
                :
                (<>
                    <img src={record} alt="record"/>
                    <span>말하기</span>
                </>)}
            </div>

            <div className={style.record_container}
            onClick={modalState}>
                <img src={check} alt="check"/>
                <span>확인하기</span>
            </div>
        </div>
        {isRecord ? <p className={style.record_text}>녹음중{dots}</p> : <p className={style.move_study} onClick={studyHandler}>공부하러 가기</p>}
        <ModalContainer
        isOpen={isOpen}
        setIsOpen={setIsOpen}>
            {isConfirm ? (
                    <div className={style.test_confirm_wrapper}>
                        <p>{COMMENT[testStep]}</p>
                        <img src={teacher} alt="teacher"/>
                    </div>
                )
                :
                (
                    <div className={style.test_modal_wrapper}>
                        <img src={bear} alt="bear"/>
                        <p>확인중{dots}</p>
                    </div>
                )
            }
        </ModalContainer>

        <Nav 
        testStep={testStep} 
        setTestStep={setTestStep}/>
    </div>
};

export default Test;