import React, { Dispatch, ReactElement, ReactNode, RefObject, useRef, useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { Message } from "./types";
import { actionsItems } from "./types";
interface ChatbotProps {
    chatbotName?: string;
    closeChatbot: () => void
    chatmessage: Message[];
    handleSubmit: (value: any) => void;
    placeholder: string;
    welcomeMessage: React.ReactNode;
    inputIcon: React.ReactElement;
    isLoading:boolean
    actionsItems?: actionsItems | actionsItems[]
    inputText: string; 
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    isdisabled:boolean
    
}

/** 
 * @component Chatbot
 * ### ChatBot Component
 * 
 * @description A reusable ChatBot component that allows users to create chatbot with predefined styles and manipulate chatbot response according to user requirements.
 * 
 * ### Features:
 * - **Action Items:** According to user requirement user can add the action items like upload in input field .
 * - **Controll over chat message:** User have full control over the chat message wheather it is user message or it is chatBot response.
 * - **Customization:** User can customize thewelcome message and icons according to the requirements 
 * - 
 * 
 * ### Props:
 * @param {string} [chatbotName] - it is an optional props if we are using chatbot in side section where we want to name our chatbot at that time we can use this prop to name the chatbot
 * @param {function} [closeChatbot] - for close down the chatbot component
 * @param {Message} chatmessage - it store all the messages of the chat.
 * @param {function} handleSubmit  - this is function that is responsible for the chatbot response.
 * @param {string} placeholder - Define the placeholde for the input feild
 * @param {ReactNode} welcomeMessage - define the welcome message in chat bot if there is no messages.
 * @param {ReactElement} inputIcon - define the submit icon in chatinput field.
 * @param {boolean} isLoading - use to make it disabled the feild unitil the Ai resposne recived back.
 * @param {actionsItems} actionsItems - To define the actionItems in the input feild.
 *.@param {string} inputText- it store the current asked query 
 * @param {boolean} isdisabled - to make chatbot disabled
 *
 * 
 * 
 * @example **Basic Usage**
 *  <Chatbot handleSubmit={handleSubmit} inputIcon={inputIcon} chatmessage={messages} placeholder={placeholder}  welcomeMessage={wlcmMsg} isLoading={isLoading}/>
 *
 * 
 * @returns {JSX.Element} - 
 */

const ChatBot: React.FC<ChatbotProps> = ({ chatmessage, handleSubmit, placeholder,isLoading, welcomeMessage, inputIcon, actionsItems, closeChatbot, chatbotName,inputText,setInputText,isdisabled }) => {

    // const [isScrollable, setIsScrollable]=useState<boolean>(false);
    // const[isBottom, setIsBottom]=useState<boolean>(true);
    const chatwindowRef = useRef<HTMLDivElement>(null);

    //  const checkBottom = () => {
    //     const container = chatwindowRef.current;
    //     if (container) {
    //       // A small tolerance value to handle potential rounding errors
    //       const isAtBottom = Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 1;

    //       // If the chat is at the bottom, set false; otherwise, set true
    //       setIsBottom(isAtBottom);
    //     }
    //   }

    //   const scrollToBottom = () => {
    //     document.querySelector('.chat-container').scrollTo({
    //       top: document.querySelector('.chat-container').scrollHeight,
    //       behavior: 'smooth', // Enables smooth scrolling
    //     });
    //   };
    return (
        <div className="w-full h-full mx-auto flex flex-col  ">
            {/* header section */}

            {
                chatbotName &&
                <div
                    className={`transition-colors duration-500 ease-in-out  flex items-center justify-between bg-custom-blue  p-2 top-0`}
                >

                    <span className="font-semibold text-lg text-white text-center">{chatbotName}</span>
                    <div
                        className="h-fit  md:block hidden cursor-pointer"
                        onClick={closeChatbot}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="white"
                            className="size-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>

                </div>
            }

            <div className=" chat-container flex-1 overflow-y-auto w-full p-2  flex flex-col" ref={chatwindowRef} >
                <ChatWindow
                    messages={chatmessage}
                    welcomeMessage={welcomeMessage}
                    chatwindowRef={chatwindowRef as React.RefObject<HTMLDivElement>}
                    isLoading={isLoading}
                />
            </div>

            <div className="flex flex-col  relative  w-full p-2 mx-auto mb-3 rounded-lg ">
                <ChatInput
                    placeholder={placeholder}
                    submitIcon={inputIcon}
                    onSubmit={handleSubmit}
                    actionsItems={actionsItems as actionsItems}
                    isLoading={isLoading}
                    inputText={inputText}
                    setInputText={setInputText}
                    isdisabled={isdisabled}
                    
                />
            </div>
        </div>  

    )
}

export default ChatBot

