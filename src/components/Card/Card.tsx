import { FC } from 'react'
import './style.scss'

interface IProps {
    onClick: React.MouseEventHandler,
    isVisible: Boolean,
    url: string
}

const Card: FC<IProps> = ({ onClick, isVisible, url }) => {

    return (
        <button onClick={onClick} className={`card-container ${isVisible ? "card-container__open" : ""} `}>
            {
                isVisible && <img src={url} alt="" />
            }
        </button>
    )
}

export default Card