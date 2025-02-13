/**
 * @comoponent LOADER 
 * ### Loader Component
 * 
 * @description it is reusable Loader component by passing an image , it will display the loader all over the screen* 
 *  ### Props:
 *   @param {string} icon - we pass the path of the image/icon by using that we want to show the loader, we are not going to pass the path directly first we are importing the image in our comopnent than pass it to loader component
 * 
 * @example
 *  USAGE
 *  import loadericon from 'PATH_OF_IMAGE'
 *  <Loader icon={loadericon}>
 * 
 * @returns {JSX.Element} 
*/

import React from 'react';
import loader from "../../assets/loader.png";


interface LoaderProps{
    icon:string
} 


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