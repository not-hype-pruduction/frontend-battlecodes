import React from 'react'

const InformationBlock = ({title, descFirstPart, descSecondPart}) => {
    return (
        <div className = 'InformationBlock'>
            <h1>{title}</h1>
            <p>{descFirstPart}</p>
            <p>{descSecondPart}</p>
            {/*<img src= ''/>*/}
        </div>
    )
}

export default InformationBlock;