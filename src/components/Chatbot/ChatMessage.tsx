import React, { use } from "react";
import { Message } from "./types";
import aiICon from './ai.png'
import userIon from './user.png'
interface chatmsgProps {
    message: Message
}
/** 
 * @component ChatMessage
 * ### ChatMessage Component
 * 
 * ### Props:
 * @param {Message} message - Either it will be user message or a AI response
 * 
 *
 * 
 * @returns {JSX.Element} - 
 */

const ChatMessage: React.FC<chatmsgProps> = ({ message }) => {

    return (
        <>
            <div key={message.id} className="mb-4 flex flex-col  mx-auto">

                {message.role === "user" && (
                    // User Message
                    <div className="flex justify-end items-start space-x-2">
                        <div className=" text-black p-3  w-fit max-w-[60%] break-words mb-2 whitespace-pre-wrap">
                            {message?.text}
                        </div>
                        <div className=" flex flex-col items-center space-y-1">
                            <img
                                src={userIon}
                                alt="user"
                                className="w-10 h-10 bg-primary-purple"
                            />

                            <span className="text-md">You</span>
                        </div>
                    </div>
                )}



                {message.role === "AI" && (
                    // AI Response
                    <div className="flex gap-2">
                        <div className=" flex flex-col items-center space-y-1">
                            <img
                                src={aiICon}
                                alt="AI"
                                className="w-10 h-10  bg-primary-purple"
                            />

                            <span className="text-md">AI</span>
                        </div>
                        <div className="flex justify-start w-full  items-start space-x-3">
                            <div
                                className={`bg-card-gray border border-card-gray text-black p-3 rounded-md w-fit max-w-full break-words mb-2 whitespace-pre-wrap`}
                            >
                                {message?.text}
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </>
    );

}

export default ChatMessage