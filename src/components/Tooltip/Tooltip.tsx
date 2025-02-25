

import React, { ReactNode, RefObject, useEffect, useRef, useState } from "react";

interface TooltipProps {
    position: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
    className?: string
    tooltipContent: string | string[]
    tooltipColour:string
    tooltipcontentstyle?:string
    // elementRef:RefObject<HTMLElement>
}
/**
 * @component
 * 
 * @description it is reusable tooltip component with functionailty of custmization style
 * 
 * ### Features
 *  Position the tooltip to parent coponent position (top bottom left right)
 *  user can modify the tooltip style
 * 
 * ### Params
 *  @param {"top"| "bottom"|"left"|"right"} position - to position the tooltip
 *  @param {ReactNode} children - on that we want to see the tooltip
 *  @param {string} [className] - to  do changes in CSS
 *  @param {string | string[]} tooltipContent -content that is going to see in the tooltip  
 * 
 *  @example
 *   <Tooltip tooltipContent="Developer" position ="top">
 *      <span> Nikhil Bhojak </span>
 *   </Tooltip>
 * 
 *  @returns  {JSX.Element}
 *      
 */
const Tooltip: React.FC<TooltipProps> = ({ position, children, className, tooltipContent,tooltipcontentstyle, tooltipColour=' bg-slate-200' }) => {
   
    const [isvisible, setisVisible] = useState<boolean>(false);
    const [tooltipStyle, setTooltipStyle] = useState({});
    const tooltipRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => setisVisible(true);
    const handleMouseLeave = () => setisVisible(false);

    useEffect(() => {
        if (tooltipRef.current) {
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const parentele = tooltipRef.current?.parentElement
            if (!parentele) return;
            const parentRect = parentele.getBoundingClientRect();

            let style = {};
            switch (position) {
                case "top":
                    style = {
                        left: parentRect.width / 2 - tooltipRect.width / 2,
                        top: -tooltipRect.height - 16,
                    };
                    break;
                case "bottom":
                    style = {
                        left: parentRect.width / 2 - tooltipRect.width / 2,
                        top: parentRect.height + 12,
                    };
                    break;
                case "left":
                    style = {
                        left: -tooltipRect.width - 12,
                        top: parentRect.height / 2 - tooltipRect.height / 2,
                    };
                    break;
                case "right":
                    style = {
                        left: parentRect.width + 12,
                        top: parentRect.height / 2 - tooltipRect.height / 2,
                    };
                    break;
                default:
                    break;
            }

            setTooltipStyle(style);
        }
    }, [isvisible, position]);
    return (
        <>
            <div
                className="relative inline-block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
                {isvisible && (
                    <div
                        ref={tooltipRef}
                        style={tooltipStyle}
                        className={`absolute text-black text-sm p-2 rounded shadow-lg whitespace-nowrap z-50 ${tooltipColour} ${className}`}
                    >
                        {Array.isArray(tooltipContent) ? (
                            <ol>
                                {tooltipContent.map((tooltip, index) => (
                                    <li key={index} className={`${tooltipcontentstyle}`}>{tooltip}</li>
                                ))}
                            </ol>
                        ) : (
                            <span className={`${tooltipcontentstyle}`}>{tooltipContent}</span>
                        )}

                        <div
                            className={`absolute w-2 h-2 ${tooltipColour}  transform rotate-45 ${position === "top"
                                ? "bottom-[-4px] left-1/2 -translate-x-1/2"
                                : position === "bottom"
                                    ? "top-[-4px] left-1/2 -translate-x-1/2"
                                    : position === "left"
                                        ? "right-[-4px] top-1/2 -translate-y-1/2"
                                        : "left-[-4px] top-1/2 -translate-y-1/2"
                                }`}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default Tooltip