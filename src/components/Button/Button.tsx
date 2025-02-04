/** 
 * 
 * ### Button Component
 * 
 * @description A reusable Button component that allows users to create buttons with predefined styles and icon placements.
 * 
 * ### Features:
 * - **Icon Placement:** Supports placing an icon on the left, right, or center of the button.
 * - **Multiple Style Options:** Supports different button styles (`primary`, `secondary`, `gradient`).
 * - **Fully Accessible:** Uses semantic HTML and supports standard button attributes.
 * - **Custom Styling:** Accepts Tailwind CSS classes via the `className` prop.
 * 
 * ### Props:
 * @param {string} key - Unique identifier for the button.
 * @param {ReactElement} [leftIcon] - Icon to be placed on the left side of the button.
 * @param {ReactElement} [rightIcon] - Icon to be placed on the right side of the button.
 * @param {ReactElement} [centerIcon] - Icon to be placed in the center of the button (useful when no text is present).
 * @param {"primary" | "secondary" | "gradient"} [buttonType="primary"] - Defines the button style.
 * @param {boolean} [disabled=false] - Determines whether the button is disabled.
 * @param {string} [className] - Additional Tailwind CSS classes for styling.
 *.
 * 
 * @example **Basic Usage**
 *
 * <Button key="basic" buttonType="primary">
 *   Click Me
 * </Button>
 * 
 * 
 * @example **With Left Icon**
 * 
 *   <Button key="leftIconBtn" buttonType="secondary" leftIcon={<BeakerIcon className="h-5 w-5 text-white" />}>
 *     Click Me
     </Button>
 * 
 * 
 * @example **With Right Icon**
 * 
 *  <Button key="rightIconBtn" buttonType="gradient" rightIcon={<ArrowRightIcon className="h-5 w-5 text-white" />}>
 *    button with right icon
 *  </Button>
 * 
 * @example **Disabled Button**
 * 
 *   <Button key="disabledBtn" buttonType="primary" disabled>
 *     Disabled
 *   </Button>
 *
 * 
 * @returns {JSX.Element} - A styled `<button>` element.
 */
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
