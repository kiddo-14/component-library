import React, { RefObject, useRef, useState } from "react";
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
    welcomeMessage: string;
    inputIcon: React.ReactElement;
    isLoading:boolean
    actionsItems?: actionsItems | actionsItems[]
}

const ChatBot: React.FC<ChatbotProps> = ({ chatmessage, handleSubmit, placeholder,isLoading, welcomeMessage, inputIcon, actionsItems, closeChatbot, chatbotName }) => {

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
        <div className="w-full h-full flex flex-col  ">
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

            <div className="flex flex-col  relative  w-3/4 mx-auto mb-3 rounded-lg ">
                <ChatInput
                    placeholder={placeholder}
                    submitIcon={inputIcon}
                    onSubmit={handleSubmit}
                    actionsItems={actionsItems as actionsItems}
                    isLoading={isLoading}
                />
            </div>
        </div>  

    )
}

export default ChatBot

