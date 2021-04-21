
const intialState = {
    position: [0, 0],
}

const playerReducer = (state = intialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default playerReducer