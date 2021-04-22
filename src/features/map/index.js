import React from 'react'

const MapTile = (props) => {
    return <div>0</div>
}

const MapRow = (props) => {
    return props.tiles.map(tile => <MapTile value={tile} />)
}

const Map = (props) => {
    return(
        <div 
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '400px',
                border: '4px solid white',
            }}
        >
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}

export default Map