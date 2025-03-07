


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
    centerSectionContent?: string | string[];
    tooltipStyle?: string;
    headertooltipcolour: string
    centerSectionContentstyle?: string
    headertooltipcontentstyle?: string
    children?: React.ReactNode

}
/**
 * @component HEADER
 * 
 * @description A reusable header component for the application. This component includes an application title, an information tooltip, and two images—one for the application logo and another for the company logo.
 * 
 * ### Features:
 * - Displays the application and company logos.
 * - Shows an application title.
 * - Includes an info tooltip with customizable content.
 * - Supports additional icons and content in the right section.
 * - Allows custom styling for the tooltip and right section content.
 * 
 * ### Props:
 * @param {string} applicationLogo - The logo of the product or application.
 * @param {string} logo - Another logo, typically used for the company logo.
 * @param {string} applicationTitle - The title of the application.
 * @param {string | string[]} infoTooltipContent - Content for the tooltip displayed next to the info icon.
 * @param {Icons | Icons[]} [centerIcons] - Icons displayed in the center section.
 * @param {string | string[]} [centerSectionContent] - Content displayed in the  section.
 * @param {string} [tooltipStyle] - CSS styling for the tooltip.
 * @param {string} [headertooltipcolour] - apply custom background colour to info tooltip .
 * @param {string} [headertooltipcontentstyle] - apply CSS stling to info tooltip content .
 * @param {string} [centerSectionContentstyle] - CSS styling for the  section content.
 *  
 * ### Example Usage:
 * ```jsx
 * <Header 
 *   logo={kanerikalogo}  
 *   applicationLogo={appLogo} 
 *   applicationTitle="My Application" 
 *   infoTooltipContent={TooltipContentOfInfo} 
 *   rightSectionContent={TooltipContentOfInfo} 
 *   rightSectionContentStyle="cursor-pointer text-md" 
 *   rightIcons={[<UserIcon />, <SettingsIcon />]} 
 * />
 * ```
 * 
 * @returns {JSX.Element}
 */


const Header: React.FC<HeaderProps> = ({
    logo,
    applicationlogo,
    applicationTitle = "AI/ML POC",
    infoTooltipContent,
    centerIcons,
    centerSectionContent,
    tooltipStyle,
    headertooltipcolour,
    centerSectionContentstyle,
    headertooltipcontentstyle,
    children
}) => {


    return (
        <nav className="flex  items-center  bg-white border-b border-gray-300 shadow-md sticky top-0 z-50 h-auto ">

            {/* Left Section */}
            <div className="flex justify-center w-1/6 border-r p-2 border-gray-300">
                <img src={applicationlogo} alt="Flip" className="h-8" />
            </div>


            <div className=" px-1 w-5/6  grid md:grid-cols-2 sm:grid-cols-1  items-center">

                {/* Center Content */}
                <div className="flex justify-start ml-2 space-x-2  items-center ">
                    <span className="text-2xl text-title-colour font-semibold">{applicationTitle}</span>
                    <Tooltip content={infoTooltipContent} contentStyle={headertooltipcontentstyle} colour={headertooltipcolour} position="bottom" className={tooltipStyle}>
                        <InformationCircleIcon className="h-8 w-7  text-2xl text-title-colour font-bold cursor-pointer" />
                    </Tooltip>
                    {centerIcons || centerSectionContent ? (
                        <>
                            {/* center Section Text */}
                            {centerSectionContent && (
                                <div>
                                    {Array.isArray(centerSectionContent) ? (
                                        <ol className="flex space-x-2">
                                            {centerSectionContent.map((item, index) => (
                                                <li key={index} className={`text-md ${centerSectionContentstyle}`}>{item}</li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <span className={`text-md ${centerSectionContentstyle}`}>{centerSectionContent}</span>
                                    )}
                                </div>
                            )}

                            {/* center Section Icons */}
                            <div className="flex space-x-2">
                                {Array.isArray(centerIcons) ? (
                                    centerIcons.map((item, index) => (
                                        <Tooltip
                                            key={index}
                                            content={item.icontooltip}
                                            colour="bg-slate-800"
                                            position="bottom"
                                            className="text-white"
                                        >
                                            {item.icon}
                                        </Tooltip>
                                    ))
                                ) : (
                                    centerIcons && (
                                        <Tooltip
                                            content={centerIcons?.icontooltip}
                                            colour="bg-slate-800"
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

                <div className={` grid ${children ? 'grid-cols-2' : 'grid-cols-1'} space-x-3 justify-between px-2 py-1 items-center`}>
                    {children && (
                        <div className={`grid grid-cols-${React.Children.count(children)} space-x-2 items-center`}>
                            {children}
                        </div>
                    )}
                    <div className={`flex space-x-2 items-center justify-end`}>
                        <span className="text-md text-title-colour">By</span>
                        <img src={logo} alt="kanerika" className="h-8" />
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;

