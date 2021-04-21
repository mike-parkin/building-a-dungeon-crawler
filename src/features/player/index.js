import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'

const Player = (props) => {
    return (
        <div
            style={{
                postion: 'relative',
                top: props.postion[1],
                left: props.postion[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '32px',
                height: '32px'
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.player
    }
}

export default connect(mapStateToProps)(Player)