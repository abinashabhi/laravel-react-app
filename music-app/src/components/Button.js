import React from 'react'

function Button(props) {
    return (
        <>
        {props.options ? props.options.map(btn =>
            <button className="btn btn-dark">{btn}</button>
            ):null}
        </>
    )
}

export default Button
