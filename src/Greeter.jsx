
import React from "react";
function Greeter(props) {
    return (
        <div>
            <h1>
                <p>{props.phrase}, {props.name}!</p>
            </h1>
        </div>
    )
}


export default Greeter

