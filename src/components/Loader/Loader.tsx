

import React from 'react';
import loader from "../../assets/loader.png";


interface LoaderProps{
    icon:string
} 

/**
 * @component LOADER
 * 
 * ### Loader Component
 * 
 * @description A reusable loader component that displays a full-screen loading animation using a user-defined image.
 * 
 * ### Features:
 * - **Custom Loader Image:** The loader image is fully customizable based on user input.
 * - **Full-Screen Overlay:** Ensures that the loader covers the entire screen.
 * 
 * ### Props:
 * @param {string} icon - The image source for the loader.
 * 
 * ### Example Usage:
 * ```jsx
 * import loaderIcon from 'PATH_TO_IMAGE';
 * 
 * <Loader icon={loaderIcon} />
 * ```
 * 
 * @returns {JSX.Element}
 */

const Loader: React.FC<LoaderProps> = ({icon}) => {    
    return (
        <>
            {
            
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <img
                            src={icon}
                            alt="Loader"
                            className="w-16 h-16 animate-spin"
                        />
                    </div>
            
            }
        </>
    );
};

export default Loader;