

import React, { JSX } from "react";

interface cardContent {
    label: string
    value?: string
}

interface KpiCardProps {
    icon: React.ReactElement;
    title: string;
    cardsectionContent?: cardContent | cardContent[];
    cardBorderColour: string;
    caretIcon?: React.ReactElement;
    value?: string;
    valueColour?: string
}

/**
 * @component
 * ### KPI Card
 * 
 * @description - it is reuseable KPI card componet that is specificaly design for kpis card like in application you want to show your kpis and their respective data so use this
 * 
 * ### PARAMS
 * 
 * @param {React.ReactElement} icon - it is for kpis icon
 * @param {string} title - it is for the name of kpi
 * @param {string} cardBorderColour - it is to specify the colour of border
 * @param { string} [value] - it is for Kpis value like how much increse decrease the value of kpis or the ammount of the particular kpis
 * @param {string} [valueColour] - determine the text colur for the kpis value
 * @param {cardContent} cardsectionContent - it is for the kpis card content
 * @param {React.ReactElement} caretIcon - is is careIcon to represent the kpis is value is increse or decrease
 * 
 * @example
 *    <KpiCard title='KPI' icon={cardIcon}  cardsectionContent={cardContent} caretIcon={caretIcon} value='344' valueColour='text-green-400'   
 * 
 * @returns {JSX.Element}
 * 
 */

const KpiCard: React.FC<KpiCardProps> = ({ icon, title, cardsectionContent, cardBorderColour = 'border-custom-blue', caretIcon, value, valueColour }) => {
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
                        {Array.isArray(cardsectionContent) ?
                            <>

                                {cardsectionContent.map((iteam, index) => (

                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-medium text-gray-500">{iteam.label}</p>
                                            <p className="text-xl font-medium text-gray-800">{iteam.value}</p>
                                        </div>
                                    </div>

                                ))}
        
                            </> :
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-medium text-gray-500">{cardsectionContent?.label}</p>
                                <p className="text-xl font-medium text-gray-800">{cardsectionContent?.value}</p>
                            </div>

                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default KpiCard