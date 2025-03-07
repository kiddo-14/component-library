

import React, { JSX } from "react";

interface cardContent {
    label: string
    value?: string
}

interface KpiCardProps {
    icon: React.ReactElement;
    title: string;
    cardContent?: cardContent | cardContent[];
    cardBorderColour: string;
    caretIcon?: React.ReactElement;
    value?: string;
    valueColour?: string
}

/**
 * @component KPI Card
 * 
 * @description A reusable KPI card component designed to display Key Performance Indicators (KPIs) along with relevant data.
 * 
 * ### Features:
 * - Displays KPI title, icon, and value.
 * - Supports customizable border and text colors.
 * - Includes an optional caret icon to indicate increase or decrease trends.
 * 
 * ### Props:
 * @param {React.ReactElement} icon - Icon representing the KPI.
 * @param {string} title - The name of the KPI.
 * @param {string} cardBorderColor - Specifies the border color of the card.
 * @param {string} [value] - Displays the KPI value, such as percentage change or total amount.
 * @param {string} [valueColor] - Determines the text color for the KPI value.
 * @param {React.ReactNode} cardContent - Content inside the KPI card.
 * @param {React.ReactElement} caretIcon - Icon representing an increase or decrease in the KPI value.
 * 
 * ### Example Usage:
 * ```jsx
 * <KpiCard 
 *   title="Revenue Growth" 
 *   icon={<RevenueIcon />} 
 *   cardBorderColor="border-blue-500"
 *   value="+12%" 
 *   valueColor="text-green-400" 
 *   cardContent={<p>Q1 Revenue Performance</p>} 
 *   caretIcon={<CaretUpIcon />} 
 * />
 * ```
 * 
 * @returns {JSX.Element}
 */


const KpiCard: React.FC<KpiCardProps> = ({ icon, title, cardContent, cardBorderColour = 'border-custom-blue', caretIcon, value, valueColour }) => {
    return (
        <>
            <div

                className={`bg-white p-4 rounded-lg shadow-xl border-t-4 ${cardBorderColour} flex flex-col space-y-2 transition-all duration-300`}
            >
                <div className="flex items-center space-x-5">
                    {icon}
                    <div className="flex-1 space-y-1">
                        <p className="font-semibold text-custom-blue-primary flex justify-between">
                            <span className='text-lg'>{title}</span>
                            {caretIcon && (
                                <span className="flex flex-row items-center space-x-2">
                                    <span className={`${valueColour} text-xl`}>
                                        {value}
                                    </span>
                                    {caretIcon}
                                </span>
                            )}
                        </p>
                        {Array.isArray(cardContent) ?
                            <>

                                {cardContent.map((iteam, index) => (

                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-medium text-gray-500">{iteam.label}</p>
                                            <p className="text-xl font-medium text-gray-800">{iteam.value}</p>
                                        </div>
                                    </div>

                                ))}

                            </> :
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-medium text-gray-500">{cardContent?.label}</p>
                                <p className="text-xl font-medium text-gray-800">{cardContent?.value}</p>
                            </div>

                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default KpiCard