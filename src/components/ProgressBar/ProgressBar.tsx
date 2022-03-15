import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TImage } from '../../redux/reducer';
import Modal from '../Modal/Modal';
import './style.scss'

interface IProps {
    counter: number,
    images: TImage[],
    handleCounter: (isReset?: Boolean, count?: number) => {}
}
declare global {
    interface Window { counterInterval: any; }
}

const MAX_SECONDS = 120 // 2 minutes

const ProgressBar: FC<IProps> = ({ counter, images, handleCounter }): JSX.Element => {
    const [modalInformation, setModalInformation] = useState<{ isOpen: Boolean, message: String }>({ isOpen: true, message: "" })
    useEffect(() => {
        if (counter !== -1 && counter < MAX_SECONDS) {
            window.counterInterval = setTimeout(() => {
                handleCounter()
            }, 1000) || {}
        }

        if (counter === MAX_SECONDS) {
            if (images.find(el => !el.isVisible)) {
                setModalInformation({ isOpen: true, message: "Tu as perdu" })
                handleCounter(true, -1)
                clearInterval(window.counterInterval)
            } else {
                setModalInformation({ isOpen: true, message: "Tu as gagné" })
                handleCounter(true, -1)
                clearInterval(window.counterInterval)
            }
        }
    }, [counter])

    useEffect(() => {
        if (!images.find(el => !el.isVisible)) {
            setModalInformation({ isOpen: true, message: "Tu as gagné" })
            handleCounter(true, -1)
            clearInterval(window.counterInterval)
        }
    }, [images])

    return (
        <div className="">
            <progress id="file" style={{ fontSize: 30 }} value={counter} max={MAX_SECONDS}>  </progress>
            {modalInformation.isOpen && <Modal
                message={modalInformation.message}
                handleReset={() => handleCounter(true, 0)}
                onClose={() => setModalInformation({ isOpen: false, message: "" })}
            />}
        </div>
    )
}


const mapStateToProps = (state: any): { counter: number, images: TImage[] } => {
    return {
        counter: state.counter,
        images: state.images
    };
};



const mapDispatchToProps = (dispatch: any): { handleCounter: (isReset?: Boolean, count?: number) => {} } => {
    return {
        handleCounter: (isReset, count) => dispatch({ type: 'CHANGE_COUNTER', isReset, count }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)