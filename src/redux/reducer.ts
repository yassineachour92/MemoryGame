
const images = [
    {
        id: 1,
        url: "/card_1.jpg",
        isVisible: false,
    },
    {
        id: 1,
        url: "/card_1.jpg",
        isVisible: false,
    },
    {
        id: 2,
        url: "/card_2.jpg",
        isVisible: false,
    },
    {
        id: 2,
        url: "/card_2.jpg",
        isVisible: false,
    },
    {
        id: 3,
        url: "/card_3.jpg",
        isVisible: false,
    },
    {
        id: 3,
        url: "/card_3.jpg",
        isVisible: false,
    },
    {
        id: 4,
        url: "/card_4.jpg",
        isVisible: false,
    },
    {
        id: 4,
        url: "/card_4.jpg",
        isVisible: false,
    },
    {
        id: 5,
        url: "/card_5.jpg",
        isVisible: false,
    },
    {
        id: 5,
        url: "/card_5.jpg",
        isVisible: false,
    },
    {
        id: 6,
        url: "/card_6.jpg",
        isVisible: false,
    },
    {
        id: 6,
        url: "/card_6.jpg",
        isVisible: false,
    },
    {
        id: 7,
        url: "/card_7.jpg",
        isVisible: false,
    },
    {
        id: 7,
        url: "/card_7.jpg",
        isVisible: false,
    },
    {
        id: 8,
        url: "/card_8.jpg",
        isVisible: false,
    },
    {
        id: 8,
        url: "/card_8.jpg",
        isVisible: false,
    }
]

export type TImage = {
    id: number,
    url: string,
    isVisible: Boolean
}

type TState = {
    counter: number,
    images: TImage[]
}
function shuffleArray(arrayParams : TImage[]): TImage[] {
    const array = arrayParams
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

export const reducer = (state: TState = {counter: -1, images: shuffleArray(images)}, action: any) => {

    switch (action.type) {
        case "CHANGE_COUNTER":
            state = {
                images: action.isReset === true ? shuffleArray(images) : state.images,
                counter: action.isReset === true ? (action.count > -1 ? action.count : -1) : state.counter + 1
            }
            break;
        case "CHANGE_CARD_VISIBLE":
            state = {
                ...state,
                images: state.images.map(image => {
                    if (image.id === action.id) {
                        return ({
                            ...image,
                            isVisible: true
                        })
                    }else {
                        return image
                    }
                })
            }
            break;
    
        default:
            break;
    }

    return state
}
