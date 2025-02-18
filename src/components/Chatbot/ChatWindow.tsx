import React, { RefObject, useEffect } from "react";
import { Message } from "./types";
import ChatMessage from "./ChatMessage";
import aiIcon from './ai.png'
import Loader from "./Loader";

interface chatwindowProps {
    messages: Message[];
    welcomeMessage: string;
    chatwindowRef: RefObject<HTMLDivElement>
    isLoading: boolean
}
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
                        <span>{welcomeMessage}</span>
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