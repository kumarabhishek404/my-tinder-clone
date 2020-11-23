export const repeat = () => {
    window.location.reload()
    return {
        type: 'REPEAT'
    }
}

export const dislike = () => {

    return {
        type: 'DISLIKE'
    }
}

export const flate = () => {

    return {
        type: 'FLATE'
    }
}

export const like = () => {

    return {
        type: 'LIKE'
    }
}

export const boom = () => {

    return {
        type: 'BOOM'
    }
}

export const createCards = (cards) => {

    return {
        type: 'CREATE_CARDS',
        data: cards
    }
}

export const addLikes = (name) => {

    return {
        type: 'ADD_LIKES',
        data: name
    }
}