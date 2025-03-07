

import React from "react";
interface CardProps {
    image?: string;
    title?: string;
    description?: string | string[]
    icon?: React.ReactElement | React.ReactElement[];
    price?: string
    highlightedText?: string;
    isSelected?: boolean;
}
/**
 * @component Product Card
 * 
 * @description A reusable product card component designed to display product details, including an image, title, price, and additional information.
 * 
 * ### Features:
 * - Displays product title, image, and price.
 * - Supports an optional highlighted text section.
 * - Includes an icon for additional content representation.
 * - Flexible description section that supports text or elements.
 * 
 * ### Props:
 * @param {React.ReactElement} icon - Icon displayed in the content section.
 * @param {string} title - The name of the product.
 * @param {string} [price] - Displays the product's price or cost.
 * @param {string} [image] - URL of the product image.
 * @param {string} [highlightedText] - Highlights specific information within the content section.
 * @param {string | string[]} description - The content of the product card
 * 
 * ### Example Usage:
 * ```jsx
 * <ProductCard 
 *   title="Audi Q8" 
 *   description='Luxury SUV with advanced features' 
 *   price="$123,456" 
 *   highlightedText="Limited Edition" 
 *   icon={<CarIcon />} 
 *   image="https://example.com/audi-q8.jpg" 
 * />
 * ```
 * 
 * @returns {JSX.Element}
 */


const ProductCard: React.FC<CardProps> = ({ image, title, description, icon, price, highlightedText, isSelected }) => {
    return (
        <div className={`w-full ${isSelected ? ' border-2  border-selected-card-border-colour shadow-lg ' : 'shadow-md'}  bg-white  rounded-md flex flex-col`}>
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
