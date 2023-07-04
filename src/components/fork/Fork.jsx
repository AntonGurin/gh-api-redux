import React from "react";
import "./fork.scss";

const Fork = (props) => {
    const fork = props.fork
    
    return(
        <div className="fork">
            <div className="fork-fullName">
                Full fork name:
            <b> {fork.full_name}</b>
            </div>
            <div className="fork-name">
                Owner name: 
            <b> {fork.owner.login}</b>
            </div>
            <div className="fork-stars">
                Stars count:
                {fork.stargazers_count}
            </div>
            <a href={fork.html_url} className="fork-link">
                Ссылка на репозиторий: {fork.html_url}
            </a>
        </div>
    )
}

export default Fork;