


import React, { Children } from "react";
import Tooltip from "../Tooltip";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface Icons {
    icontooltip: string;
    icon: React.ReactElement;
}

interface HeaderProps {
    applicationlogo: string;
    logo: string;
    applicationTitle: string;
    infoTooltipContent: string | string[];
    centerIcons?: Icons | Icons[];
    centersectContent?: string | string[];
    tooltipStyle?: string;
    headertooltipcolour: string
    centerSectContentstyle?: string
    headertooltipcontentstyle?: string
    children?: React.ReactNode

}

/**
 * @component HEADER
 * 
 * @description it is reusable header component for the application, Using this we can develop header component for the application that contain the application, information tooltip and 2 image one of them is application logo and another one is Compan
 * 
 * ###Params
 *  @param {string} applicationlogo - it is for logo of the product/application 
 *  @param {string} logo -it is the another logo here use for Company logo
 *  @param {string} applicationTitle - Title of the application
 *  @param {string | string[]} infoTooltipContent - Contains the tooltip content for the info icon
 *  @param {Icons |Icons} [rightIcons] - conatins the icons for the right section
 *  @param {string |string[]} [rightsectContent] - conatains the  content of right section
 *  @param {string} [tooltipStyle] - to add the CSS to tooltip
 *  @param {string} [rightSectContentstyle] - to add css to the right section content
 *  
 * ### Example
 *  @example
 *    <Header logo={kanerikalogo}  infoTooltipContent={TooltipContentOfInfo} rightsectContent={TooltipContentOfInfo} rightSectContentstyle='cursor-pointer text-md' rightIcons={rightIcons} />
 *   
 *   @returns {JSX.Element}
 */

const Header: React.FC<HeaderProps> = ({
    logo,
    applicationlogo,
    applicationTitle = "AI/ML POC",
    infoTooltipContent,
    centerIcons,
    centersectContent,
    tooltipStyle,
    headertooltipcolour,
    centerSectContentstyle,
    headertooltipcontentstyle,
    children
}) => {
    return (
        <nav className="flex  items-center  bg-white border-b border-gray-300 shadow-md sticky top-0 z-50 h-auto ">

            {/* Left Section */}
            <div className="flex justify-center w-1/6 border-r p-2 border-gray-300">
                <img src={applicationlogo} alt="Flip" className="h-8" />
            </div>


            <div className="flex px-1 w-5/6 justify-between items-center">

                {/* Center Content */}
                <div className="flex justify-start ml-2 space-x-2 w-1/2 items-center ">
                    <span className="text-2xl text-title-colour font-semibold">{applicationTitle}</span>
                    <Tooltip tooltipContent={infoTooltipContent} tooltipcontentstyle={headertooltipcontentstyle} tooltipColour={headertooltipcolour} position="bottom" className={tooltipStyle}>
                        <InformationCircleIcon className="h-8 w-7  text-2xl text-title-colour font-bold cursor-pointer" />
                    </Tooltip>
                    {centerIcons || centersectContent ? (
                        <>
                            {/* center Section Text */}
                            {centersectContent && (
                                <div>
                                    {Array.isArray(centersectContent) ? (
                                        <ol className="flex space-x-2">
                                            {centersectContent.map((item, index) => (
                                                <li key={index} className={`text-md ${centerSectContentstyle}`}>{item}</li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <span className={`text-md ${centerSectContentstyle}`}>{centersectContent}</span>
                                    )}
                                </div>
                            )}

                            {/* center Section Icons */}
                            <div className="flex space-x-2">
                                {Array.isArray(centerIcons) ? (
                                    centerIcons.map((item, index) => (
                                        <Tooltip
                                            key={index}
                                            tooltipContent={item.icontooltip}
                                            tooltipColour="bg-slate-800"
                                            position="bottom"
                                            className="text-white"
                                        >
                                            {item.icon}
                                        </Tooltip>
                                    ))
                                ) : (
                                    centerIcons && (
                                        <Tooltip
                                            tooltipContent={centerIcons?.icontooltip}
                                            tooltipColour="bg-slate-800"
                                            position="bottom"
                                            className="text-white"
                                        >
                                            {centerIcons?.icon}
                                        </Tooltip>
                                    )
                                )}
                            </div>
                        </>
                    ) : null}
                </div>

                {/* Right Content */}
                {/* <div className="flex w-1/2 space-x-3 justify-end px-2 py-1 items-center ">
                  {children && (

                    <div className="w-1/2 space-x-2 justify-start  items-center ">
                        {children}
                    </div>
                  ) }
                    <div className={`${children?'w-1/2' : 'w-full'}  flex space-x-2 justify-end items-center`}>
                        <span className=" text-md">By</span>
                        <img src={logo} alt="kanerika" className="h-8" />
                    </div>
                </div> */}

                <div className="flex  space-x-3 justify-between px-2 py-1 items-center">
                    {children && (
                        <div className="flex flex-grow space-x-2 items-center">
                            {children}
                        </div>
                    )}
                    <div className={`flex space-x-2 items-center ${children ? "w-1/2" : "w-full"} justify-end`}>
                        <span className="text-md">By</span>
                        <img src={logo} alt="kanerika" className="h-8" />
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;

