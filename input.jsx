import React from 'react';
import './input.css';

function Input(props) {
    return (
        <div className="input">
            <textarea className="content" cols="16" rows="2" placeholder="Press Number" value={props.value}></textarea>
            {/* <div className="content">{props.label}</div> */}

        </div>
    );
}

export default Input;