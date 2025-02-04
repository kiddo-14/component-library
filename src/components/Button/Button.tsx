// import React, { ReactElement } from "react" ;

// interface ButtonProps {
//     label : string;
//     type: string;
    
// }

// const Button =(props:ButtonProps)=>{
//     return (
//         <>
//            <button className="outline text-2xl p-2">{props.label}</button>
//         </>
//     )
// };

// export default Button;


import React, { forwardRef, memo, useMemo } from "react";

type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;
type Ref = HTMLButtonElement;


interface ButtonProps extends BaseButtonAttributes {
    key:string;
    disabled?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    centerIcon?: React.ReactElement;
    buttonType?: "primary" | "secondary" | "gradient";
    className?: string;
}

const getButtonStyles = (btntype: "primary" | "secondary" | "gradient", disabled: boolean) => {
    const baseStyles = `px-4 py-2  rounded-lg font-medium transition duration-200 flex items-center justify-center ${disabled && ' opacity-50'} `;

    const btntypes = {
        primary: `bg-custom-blue text-white`,
        secondary: ``,
        gradient: `bg-gradient-45 hover:bg-gradient-hover text-white`,
    };

    return `${baseStyles} ${btntypes[btntype]} ${disabled ? "cursor-not-allowed opacity-40" : ""}`;
};

const Button = memo(forwardRef<Ref, ButtonProps>((props, ref) => {
    const {
        type="button", children, buttonType = "primary", disabled=false, leftIcon = undefined, rightIcon = undefined, centerIcon=undefined ,className="", ...rest
    } = props;

    let lefticonPlacement : string='';
    let righticonPlacement: string ='';
    let centericonplacement: string='';

    if(leftIcon){
        lefticonPlacement='left';
    }
    if(rightIcon){
        righticonPlacement='right';
    }
    if(centerIcon){
        centericonplacement='center'
    }

    // const { icon, iconPlacement } = useMemo(() => {
    //     if(rightIcon) {
    //         return { icon: rightIcon, iconPlacement: 'right' }
    //     }

    //     if(leftIcon) {
    //         return { icon: leftIcon, iconPlacement: 'left' }
    //     }

    //     return { icon: undefined, iconPlacement: undefined };
    // }, [leftIcon, rightIcon]);

    return (
        
            <button
                className={`${getButtonStyles(buttonType, disabled)} ${className} `}
                {...rest}
                type={type ? "submit" : "button"}
                ref={ref}
                
                disabled={disabled}
            >
                {/* Left Icon */}
                { leftIcon && lefticonPlacement === "left" && (
                    <span className={`mr-2 inline-flex self-center ${children && "space-x-2"}`}>{leftIcon}</span>
                )}
                {/* center Icon */}
                {centerIcon && centericonplacement === "center" && (
                    <span className={`inline-flex self-center`}>{centerIcon}</span>
                )}

              {children}

                {/* Right Icon */}
                { rightIcon&& righticonPlacement === "right" && (
                    <span className={`ml-2 inline-flex self-center ${children && "space-x-2"}`}>{rightIcon}</span>
                )}
            </button>
        
    );
}));

export default Button;
