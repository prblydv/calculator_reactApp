import React from 'react'
import './button.css'

function isOperator(val) {
    return !isNaN(val) || val === '.' || val === '='
}

function Button(props) {
    return (
        <button type='button'
            className={`button-wrapper ${isOperator(props.children) ? null : 'operator'
                } }`}
            onClick={() => props.onClick(props.children)}
        >
            {props.children}
        </button>
    )
}

export default Button
