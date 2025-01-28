import React, { ReactElement } from "react" ;

interface ButtonProps {
    label : string;
    type: string;
    
}

const Button =(props:ButtonProps)=>{
    return (
        <>
           <button className="outline text-2xl p-2">{props.label}</button>
        </>
    )
};

export default Button;