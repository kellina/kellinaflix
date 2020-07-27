import React from 'react'

function ButtonLink (props) {
    // props -> é um objeto { className: "o que alguém passar", href: "varaiar" }

    return (
     <a href={props.href} className={props.className}>
         {props.children}
     </a>   
    )
}

export default ButtonLink