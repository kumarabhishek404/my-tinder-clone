const initialState = {
    allCards: [],
    liked: []
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REPEAT':
            return {
                ...state
            }
        case 'DISLIKE':
            console.log('disliking')
            return {
                ...state
            }
        case 'FLATE':
            console.log('flating')
            return {
                ...state
            }
        case 'LIKE':
            console.log('liking')
            return {
                ...state
            }
        case 'BOOM':
            console.log('booming')
            return {
                ...state
            }
        case 'CREATE_CARDS':
            console.log('creating cards')
            return {
                ...state,
                allCards: action.data
            }
        case 'ADD_LIKES':
            console.log('Adding likes', state.liked)
            return {
                ...state,
                liked: action.data
            }
        default:
            return state;
    }
}

export default cardReducer;