import React from 'react';
// import PropTypes from "prop-types";
import Button from './Button';

const Header = ({title ="Task Tracker"}) => {
    const handleClick=()=>{
        console.log("Click with handleClick from header");
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button handleClickFromHeader={handleClick} color="lightgrey" 
            text="Show Add Task Bar"/>
        </header>
    )
}

// DEFAULT PROPS
// Header.defaultProps ={
//     title="TASK TRACKER"
// }

// Header.propTypes={
//     title: PropTypes.string.isRequired,
// };
export default Header;
