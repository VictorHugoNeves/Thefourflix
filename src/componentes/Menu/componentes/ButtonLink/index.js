import React from 'react';

function ButtonLink(props) {
    // props => { className: "o que alguém quer passar", href: "/"}
    
    return (
        <a href={props.href} className={props.className}>
            Novo Video
        </a>
    );
}

export default ButtonLink;