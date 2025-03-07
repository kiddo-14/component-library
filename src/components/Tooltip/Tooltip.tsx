

import React, { ReactNode, RefObject, useEffect, useRef, useState } from "react";

interface TooltipProps {
    position: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
    className?: string
    content: string | string[]
    colour:string
    contentStyle?:string
    // elementRef:RefObject<HTMLElement>
}
/**
 * @component Tooltip
 * 
 * @description A reusable tooltip component with customizable styles and positioning.
 * 
 * ### Features:
 * - **Positioning:** Can be placed relative to the parent component (top, bottom, left, or right).
 * - **Customizable Styles:** Allows users to modify tooltip appearance via custom CSS.
 * 
 * ### Props:
 * @param {"top" | "bottom" | "left" | "right"} position - Position of the tooltip relative to the parent.
 * @param {React.ReactNode} children - The element that triggers the tooltip on hover.
 * @param {string} [className] - Custom class for additional styling.
 * @param {string} [colour] - User-defined color for the tooltip.
 * @param {string} [contentStyle] - CSS styling for the tooltip content.
 * @param {string | string[]} content - The text or content displayed inside the tooltip.
 * 
 * ### Example Usage:
 * ```jsx
 * <Tooltip tooltipContent="Developer" position="top">
 *   <span>Nikhil Bhojak</span>
 * </Tooltip>
 * ```
 * 
 * @returns {JSX.Element}
 */

const Tooltip: React.FC<TooltipProps> = ({ position, children, className, content,contentStyle, colour=' bg-slate-200' }) => {
   
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
                        className={`absolute text-black text-sm p-2 rounded shadow-lg whitespace-nowrap z-50 ${colour} ${className}`}
                    >
                        {Array.isArray(content) ? (
                            <ol>
                                {content.map((tooltip, index) => (
                                    <li key={index} className={`${contentStyle}`}>{tooltip}</li>
                                ))}
                            </ol>
                        ) : (
                            <span className={`${contentStyle}`}>{content}</span>
                        )}

                        <div
                            className={`absolute w-2 h-2 ${colour}  transform rotate-45 ${position === "top"
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