import React from 'react';
import './clearButton.css'

function ClearButton(props) {
    return (
        <button type='button' className="clearButton" onClick={props.onClick} >
            Clear
        </button>
    );
}
export default ClearButton;