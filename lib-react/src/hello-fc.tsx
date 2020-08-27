// function component

import React from 'react';

const Hello: React.FC<{name: string}> = ({name}) =>{
    if(!{name}){
        name = "mundo"
    }

    return (<h1>Hola {name} </h1>);
}

export default Hello;