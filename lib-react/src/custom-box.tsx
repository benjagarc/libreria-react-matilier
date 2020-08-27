import React  from 'react';

const CustomBox = (props:any) =>{

    const {width, height, bgColor, color, content}= props;
    const showText = (!content) ? 'Texto de Ejemplo' : content;

    
    return(
        <div style={
            {
                width : width || 200,
                height : height || 200,
                backgroundColor : bgColor || "green",
                color : color || "white",

            }
        }>
            <p>{showText}</p>
        </div>
    )

}

export default CustomBox;
