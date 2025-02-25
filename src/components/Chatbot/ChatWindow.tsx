import React, { RefObject, useEffect } from "react";
import { Message } from "./types";
import ChatMessage from "./ChatMessage";
import aiIcon from './ai.png'
import Loader from "./Loader";

interface chatwindowProps {
    messages: Message[];
    welcomeMessage: React.ReactNode;
    chatwindowRef: RefObject<HTMLDivElement>
    isLoading: boolean
}

/** 
 * @component ChatWindow
 * ### ChatWindow Component
 * 
 * @description A Chatwindow component  all the chatmessages display here in this section.
 * 
 * ### Props:
 * @param {Message} messages - it store all the messages of the chat.
 * @param {ReactNode} welcomeMessage - define the welcome message in chat bot if there is no messages.
 * @param {boolean} isLoading - use to make it disabled the feild unitil the Ai resposne recived back.
 * @param {RefObject} chatwindowRef -use to reach at the recent message
 *.
 * 
 * @returns {JSX.Element} - 
 */
const ChatWindow: React.FC<chatwindowProps> = ({ messages, welcomeMessage, chatwindowRef, isLoading }) => {

    useEffect(() => {
        const chatConversationsContainer = chatwindowRef?.current;
        if (chatConversationsContainer) {
            chatConversationsContainer.scrollTo(
                0,
                chatConversationsContainer.scrollHeight
            );
        }
    }, [messages]);
    return (
        <div className="flex-1 mb-4 w-full pr-7 pl-7 ">
            {messages.length > 0 ? (
                messages.map((message, index) => (
                    <ChatMessage
                        message={message}
                    />
                ))
            )
                :
                (
                    <p className="flex items-center justify-center h-full text-gray-500 text-base">
                        {welcomeMessage}
                    </p>
                )
            }

            {isLoading && (
                <div className="flex gap-2">
                    <div className=" flex flex-col items-center space-y-1">
                        <img
                            src={aiIcon}
                            alt="AI"
                            className="w-10 h-10  bg-primary-purple"
                        />

                        <span className="text-md">AI</span>
                    </div>
                    <div
                        className={`bg-card-gray border border-card-gray w-auto h-fit p-2 rounded-2xl `}
                    >
                        <Loader />
                    </div>
                </div>
            )}

        </div>
    )
}

export default ChatWindow