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
import COMMENT from "./Comment.js";
import ModalContainer from "../../Components/modal/ModalContainer";

const Test = () => {
    const [isRecord, setIsRecord] = useState(false);
    const [testStep, setTestStep] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);

    // WebP 지원 여부를 확인
    const supportsWebP = () => {
        const elem = document.createElement('canvas');
        if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        }
        // very old browser like IE 8, canvas not supported
        return false;
    };
    
    const backgroundImageUrl = supportsWebP() ? testImgWebP : testImg;

    const modalState = () => {
        setIsOpen(true);
    };

    const step1 = testStep === 0 ? style.progress_now : style.progress;
    const step2 = testStep === 1 ? style.progress_now : style.progress;
    const step3 = testStep === 2 ? style.progress_now : style.progress;

    const recordHandler = () => {
        setIsRecord(!isRecord);
    };

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
        <h2>직접 따라 읽어봐요!</h2>
        <div className={style.progress_container}>
            <div className={step1}>1</div>
            <div className={step2}>2</div>
            <div className={step3}>3</div>
        </div>
        <div className={style.question}>여기는 문제가 나오는 곳입니다.</div>
        
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
        {isRecord && <p className={style.record_text}>녹음중{dots}</p>}
        <ModalContainer
        isOpen={isOpen}
        setIsOpen={setIsOpen}>
            {isConfirm ? (
                    <div className={style.test_confirm_wrapper}>
                        <p>{COMMENT}</p>
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