import React, {useState} from "react";
import  {actionsItems} from './types'
interface chatinputProps {
    placeholder:string
    submitIcon:React.ReactElement
    onSubmit:(value:any)=>void
    actionsItems?:actionsItems| actionsItems[]
    isLoading:boolean
}

const ChatInput :React.FC<chatinputProps>= ({placeholder,submitIcon,onSubmit,actionsItems,isLoading})=>{
    const[inputText,setInputText]=useState('');
    const [textareaHeight, setTextareaHeight] = useState(50);
    


    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
        //   setDisableSend(true);
          onSubmit(inputText);
          setTextareaHeight(50);
          setInputText('');
        }
      };

    const handleInputChange = (e:any) => {
        setInputText(e.target.value);
      };
    
      const handleKeyDown = (e:any) => {
        // Handle sending message on Enter key (without Shift)
        if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
          e.preventDefault(); // Prevent the default Enter key behavior (new line)
          handleSendMessage();
        }
      };
    
      const handleInput = (e:any) => {
        const textarea = e.target;
        // Reset the height to 'auto' to recalculate based on content
        textarea.style.height = 'auto';
        const newHeight = Math.min(textarea.scrollHeight, 70);
        setTextareaHeight(newHeight); // Update the height state
        textarea.style.height = `${newHeight}px`; // Apply the new height to the textarea
      };
    return(
        <>
            
            {/* {isScrollable && !isBottom && (
              <div className='mx-auto '>
                <button onClick={scrollToBottom} className='  -mt-12  rounded-full absolute  p-2 text-lg bg-gradient-45 text-white  flex items-center justify-center  '>
                  <ChevronDoubleDownIcon className='h-6 w-6  '/>
                </button>
              </div>
            )} */}
           {/* is this section have multiple section */} 
            <div className="flex w-full items-center justify-center px-4 relative ">
              <textarea
                rows={1}
                cols={30}
                // className="w-full p-2 pl-2 cursor-text border-none bg-slate-50 focus:outline-none mb-2 rounded pr-10 overflow-y-auto"
                className="w-full size-14  mb-2 p-2 ml-14 border focus:outline-gray-200 rounded pr-10  overflow-y-auto"
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
                disabled={isLoading}
                className={`rounded-full absolute right-6 p-2 bottom-4 ml-2 shadow-md text-white flex items-center justify-center 
        ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-blue'}`}

              >
                {submitIcon}
              </button>
            </div> 
          
        </>
    )
}

export default ChatInput