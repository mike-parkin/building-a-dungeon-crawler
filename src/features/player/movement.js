import store from '../../config/store'
import { SPRITE_SIZE } from '../../config/constants'

export default function handleMovement(player) {

    function getNewPostion(direction) {
        const oldPos = store.getState().player.postion
        return [ oldPos[0] - SPRITE_SIZE, oldPos[1]]
    }

    function dispatchMove(direction) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)   
            }
        })
    }

    function handleKeyDown(e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 37:
                return dispatchMove("WEST")
            case 38:
                return dispatchMove('NORTH')
            case 39:
                return dispatchMove('EAST')
            case 40:
                return dispatchMove('SOUTH')
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}