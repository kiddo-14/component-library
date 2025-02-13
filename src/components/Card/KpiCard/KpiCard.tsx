import React from "react";

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