import React from "react";

const Fork = (props) => {
    const fork = props.fork
    return(
        <div className="fork">
            <div className="fork-fullName">
                {fork.name}
            </div>
        </div>
    )
}

export default Fork;