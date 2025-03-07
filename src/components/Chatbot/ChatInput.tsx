import React, { useState } from "react";
import Tooltip from "../Tooltip";
import { actionsItems } from './types'
interface chatinputProps {
    placeholder: string
    submitIcon: React.ReactElement
    onSubmit: (value: any) => void
    actionsItems?: actionsItems | actionsItems[]
    isLoading: boolean
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    isdisabled: boolean
}

/** 
 * @component ChatInput
 * ### ChatInput Component
 * 
 * @description A ChatInput Component using user able to write down their query it is function component of chatbot means all the function calls are made in this omponet 
 * 
 * ### Features:
 * - **Action Items:** According to user requirement user can add the action items like upload in input field .
 * - **Customization:** User can customize thewelcome message and icons according to the requirements 
 * - 
 * 
 * ### Props:
 * @param {function} onSubmit  - this is function that is responsible for the chatbot response.
 * @param {string} placeholder - Define the placeholde for the input feild
 * @param {ReactElement} submitIcon - define the submit icon in chatinput field.
 * @param {boolean} isLoading - use to make it disabled the feild unitil the Ai resposne recived back.
 * @param {actionsItems} actionsItems - To define the actionItems in the input feild.
 * @param {string} inputText- it store the current asked query 
 * @param {boolean} isdisabled - to make chatbot disabled
 * 
 * 
 * @returns {JSX.Element} - 
 */

const ChatInput: React.FC<chatinputProps> = ({ placeholder, submitIcon, onSubmit, actionsItems, isLoading, inputText, setInputText, isdisabled }) => {
    // const [inputText, setInputText] = useState('');
    const [textareaHeight, setTextareaHeight] = useState(50);



    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            // setDisableSend(true);
            onSubmit(inputText);
            setTextareaHeight(50);
            setInputText('');
        }
    };

    const handleInputChange = (e: any) => {
        setInputText(e.target.value);
    };

    const handleKeyDown = (e: any) => {
        // Handle sending message on Enter key (without Shift)
        if (e.key === 'Enter' && !e.shiftKey && !isLoading && !isdisabled) {
            e.preventDefault(); // Prevent the default Enter key behavior (new line)
            handleSendMessage();
        }
    };

    const handleInput = (e: any) => {
        const textarea = e.target;
        // Reset the height to 'auto' to recalculate based on content
        textarea.style.height = 'auto';
        const newHeight = Math.min(textarea.scrollHeight, 70);
        setTextareaHeight(newHeight); // Update the height state
        textarea.style.height = `${newHeight}px`; // Apply the new height to the textarea
    };
    return (
        <>

            {/* {isScrollable && !isBottom && (
              <div className='mx-auto '>
                <button onClick={scrollToBottom} className='  -mt-12  rounded-full absolute  p-2 text-lg bg-gradient-45 text-white  flex items-center justify-center  '>
                  <ChevronDoubleDownIcon className='h-6 w-6  '/>
                </button>
              </div>
            )} */}
            {/* is this section have multiple section */}
            <div className=" pl-7 pr-7 flex w-full space-x-2">
                {/* Action items */}
                {actionsItems && (

                    <div className="flex space-x-2 items-center">
                        {Array.isArray(actionsItems) ? (
                            actionsItems.map((action, index) => (

                                <div key={index} className="p-2 ">
                                    <Tooltip position="top" content={action.label} colour="bg-slate-800" contentStyle="text-white" >
                                        {action.iteam}
                                    </Tooltip>
                                </div>
                            ))
                        ) : (


                            <div className="p-2">
                                <Tooltip position="top" content={actionsItems.label} colour="bg-slate-800" contentStyle="text-white"  >
                                    {actionsItems.iteam}
                                </Tooltip>
                            </div>

                        )}
                    </div>
                )}


                {/* Input field  */}
                <div className="flex w-full items-center justify-center relative ">
                    <textarea
                        rows={1}
                        cols={30}
                        // className="w-full p-2 pl-2 cursor-text border-none bg-slate-50 focus:outline-none mb-2 rounded pr-10 overflow-y-auto"
                        className="w-full size-14 bg-card-gray rounded-tl-md rounded-bl-md  p-3  focus:outline-none  overflow-y-auto"
                        placeholder={placeholder}
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onInput={handleInput}
                        style={{
                            resize: 'none',
                            overflowY: 'auto',
                            minHeight: '50px',
                            height: `${textareaHeight}px`,
                            //  transform: `translateY(-${textareaHeight - 50}px)`
                        }
                        }
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={isdisabled}
                        className={`h-full right-6 p-2 bottom-4  shadow-md text-white flex items-center rounded-tr-md rounded-br-md justify-center 
        ${(isdisabled || isLoading) ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-blue'}`}

                    >
                        {submitIcon}
                    </button>
                </div>
            </div>

        </>
    )
}

export default ChatInput