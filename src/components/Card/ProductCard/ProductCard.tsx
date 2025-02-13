import React from "react";


interface CardProps {
    image?: string;
    title?: string;
    description?: string | string[]
    icon?: React.ReactElement | React.ReactElement[];
    price?: string
    highlightedText?: string;
}

const ProductCard: React.FC<CardProps> = ({ image, title, description, icon, price, highlightedText }) => {
    return (
        <div className="w-full bg-white shadow-md rounded-lg flex flex-col">
            {/* Image Section */}
            {image && (
                <div className="w-full">
                    <img src={image} alt="Card Image" className="w-full h-full" />
                </div>
            )}

            {/* Card Content Section */}
            <div className={` w-full   bg-card-gray  p-2 rounded-sm`}>
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
