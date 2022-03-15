import { FC, useState } from 'react'
import { connect } from 'react-redux'
import { TImage } from '../../redux/reducer'
import Card from '../Card/Card'
import './style.scss'




type TMapDispatchToPropsResult = {
    handleChangeCardVisible: (id: Number) => React.MouseEventHandler
}

type TMapStateToPropsResult = {
    images: Array<TImage>,
}

interface IProps extends TMapDispatchToPropsResult {
    images: Array<TImage>,
}


const Game: FC<IProps> = ({ images, handleChangeCardVisible }): JSX.Element => {
    const [card1, setCard1] = useState<{ id: Number, index: Number }>({ id: -1, index: -1 })
    const [card2, setCard2] = useState<{ id: Number, index: Number }>({ id: -1, index: -1 })

    const onClickCard = (id: Number, index: Number) => {
        if (card1.index === index) return
        if (card1.id === -1) {
            setCard1({
                id,
                index
            })
        } else {
            setCard2({
                id,
                index
            })
            if (card1.id === id) {
                handleChangeCardVisible(id)
            }
            setTimeout(() => {
                setCard1({
                    id: -1,
                    index: -1
                })
                setCard2({
                    id: -1,
                    index: -1
                })
            }, 300)
        }
    }

    return (
        <div className="game-container">
            {
                images.map((el, index) => (
                    <Card
                        key={index}
                        isVisible={el.isVisible || index === card1.index || index === card2.index}
                        url={el.url}
                        onClick={() => onClickCard(el.id, index)}
                    />
                ))
            }
        </div>
    )
}


const mapStateToProps = (state: any): TMapStateToPropsResult => {
    return {
        images: state.images
    };
};



const mapDispatchToProps = (dispatch: any): TMapDispatchToPropsResult => {
    return {
        handleChangeCardVisible: (index) => dispatch({ type: 'CHANGE_CARD_VISIBLE', id: index }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Game)