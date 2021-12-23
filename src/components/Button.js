import React from 'react'


const Button = ({handleClickFromHeader, color, text}) => {
    // const handleClick=()=>{
    //     console.log("Click with handleClick");
    // }
    return (
        <div>
            <button className='btn' onClick={handleClickFromHeader} 
            style={{backgroundColor:color}}
            >{text}</button>
        </div>
    )
}

export default Button
