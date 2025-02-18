/**
 * @component
 * ### Product Card
 * 
 * @description - it is reuseable KPI card componet that is specificaly design for kpis card like in application you want to show your kpis and their respective data so use this
 * 
 * ### PARAMS
 * 
 * @param {React.ReactElement} icon - it is for iconn in content section
 * @param {string} title - it is for the name of the product
 * @param { string} [price] - it is shows the ammount of particular product
 * @param {string} [image] - display the image of the product
 * @param {string} [highlightedText] - it is for highlted text in content section
 * @param {string |string[]} description - it is for the product card content
 * 
 * @example
 *     <ProductCard title='Audi Q8' description={TooltipContentOfInfo} price='1234' highlightedText='this is my highleted text' icon={cardIcon}/> 
 * 
 * @returns {JSX.Element}
 * 
 */

import React from "react";
interface CardProps {
    image?: string;
    title?: string;
    description?: string | string[]
    icon?: React.ReactElement | React.ReactElement[];
    price?: string
    highlightedText?: string;
    isSelected?:boolean;
}

const ProductCard: React.FC<CardProps> = ({ image, title, description, icon, price, highlightedText,isSelected }) => {
    return (
        <div className={`w-full ${isSelected ?' border-2  border-selected-card-border-colour shadow-lg ' :'shadow-md' }  bg-white  rounded-md flex flex-col`}>
            {/* Image Section */}
            {image && (
                <div className="w-full">
                    <img src={image} alt="Card Image" className="w-full h-full rounded-sm " />
                </div>
            )}

            {/* Card Content Section */}
            <div className={` w-full   ${isSelected ? ' bg-primary-light-purple ' : 'bg-card-gray'} p-4 rounded-sm`}>
                {/* content section + Action iteam */}
                <div className="flex w-full  ">
                    {/* description */}
                    <div className="flex flex-col  w-3/4 ">
                        <span className="text-lg font-semibold ">{title}</span>


                        {/* Info Section */}
                        <div className="flex flex-col">
                            {Array.isArray(description) ? (
                                <div className="flex flex-col space-y-1">
                                    {description.map((item, index) => (
                                        <span key={index} className="text-md">{item}</span>
                                    ))}
                                </div>
                            ) : (
                                
                                <span className="text-sm">{description}</span>
                            )}
                        {/* Number */}
                        {price && (
                            <span className="text-lg font-semibold">${price}</span>
                        )}
                        </div>

                    </div>
                    {/* action iteams */}
                    <div className="w-1/4 flex flex-col items-end  ">
                        {Array.isArray(icon) ? (
                            <div className="flex fex-col justify-center">
                                {icon.map((iteam, index) => (
                                    <>
                                        {iteam}
                                    </>
                                ))}
                            </div>
                        ) :
                            (
                                <>
                                    {icon}
                                </>
                            )}
                    </div>
                </div>

                {/* Highlighted Text Section */}
                <div className="flex w-full bg-primary-light-purple text-md rounded-md   justify-center items-center">
                    {highlightedText && (
                        <span className="text-sm">{highlightedText}</span>
                    )}
                </div>
            </div>


        </div>
    );
};

export default ProductCard;
