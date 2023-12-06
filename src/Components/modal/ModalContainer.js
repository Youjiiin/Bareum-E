import style from "./ModalContainer.module.css";

const ModalContainer = ( props ) => {
    const clickBackdrop = () => {
        props.setIsOpen(false);
    };

    const clickModal = (event) => {
        event.stopPropagation(); // 이벤트 버블링을 중단
    };

    return <>
    {props.isOpen && (<div className={style.backdrop} onClick={clickBackdrop}>
        <div className={style.modal_wrapper} onClick={clickModal}>
        <div className={style.modal_close}
        onClick={clickBackdrop}>X</div>
            {props.children}
        </div>
    </div>)}
    </>
};

export default ModalContainer;