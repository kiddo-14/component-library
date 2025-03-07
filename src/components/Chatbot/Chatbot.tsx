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
    isLoading: boolean
    actionsItems?: actionsItems | actionsItems[]
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    isdisabled: boolean

}
/** 
 * @component Chatbot
 * 
 * ### Chatbot Component
 * 
 * @description A reusable chatbot component that allows users to create a chatbot with predefined styles and customize responses as per their requirements.
 * 
 * ### Features:
 * - **Action Items:** Users can add action items, such as an upload button, in the input field based on their needs.
 * - **Full Control Over Messages:** Users have complete control over chat messages, whether it's a user message or a chatbot response.
 * - **Customization:** The chatbot name, welcome message, and icons can be customized as required.
 * 
 * ### Props:
 * @param {string} [chatbotName] - An optional prop for naming the chatbot, useful when displaying it in a side section.
 * @param {function} [closeChatbot] - A function to close the chatbot component.
 * @param {Message} chatMessage - Stores all chat messages.
 * @param {function} handleSubmit - A function responsible for handling chatbot responses.
 * @param {string} placeholder - Defines the placeholder text for the input field.
 * @param {ReactNode} welcomeMessage - Defines the welcome message when there are no messages in the chat.
 * @param {ReactElement} inputIcon - Defines the submit icon in the chat input field.
 * @param {boolean} isLoading - Disables the input field until the AI response is received.
 * @param {actionItems} actionItems - Defines the action items in the input field.
 * @param {string} inputText - Stores the current user query.
 * @param {boolean} isDisabled - Disables the chatbot.
 * 
 * ### Example Usage:
 * ```jsx
 * <Chatbot 
 *   handleSubmit={handleSubmit} 
 *   inputIcon={inputIcon} 
 *   chatMessage={messages} 
 *   placeholder={placeholder}  
 *   welcomeMessage={welcomeMsg} 
 *   isLoading={isLoading} 
 * />
 * ```
 * 
 * @returns {JSX.Element}
 */

const ChatBot: React.FC<ChatbotProps> = ({ chatmessage, handleSubmit, placeholder, isLoading, welcomeMessage, inputIcon, actionsItems, closeChatbot, chatbotName, inputText, setInputText, isdisabled }) => {

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

