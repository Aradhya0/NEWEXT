import React, { useState } from 'react'
import './livechat.css'

const ChatInput = ({placeholder, setInput }) => {
  return (
       <>
            <div className="chat-input">
                <form action="submit">
                    <textarea 
                        // onChange={e => setValue(e.target.value)}
                        name="" id="input-area" cols="30" rows="10" 
                        placeholder={ placeholder }
                        onChange={e => setInput(e.target.value)}
                    >
                    </textarea>
                    <div className="input-tools">
                        <div className="emojis">
                            <i className='fa fa-smile-o' ></i>
                            <i className='fa fa-bold'></i>
                            <i className='fa fa-italic'></i>
                            <i className='fa fa-quote-right'></i>
                        </div>
                        <button>Send<span><i className='fa fa-arrow-right'></i></span></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ChatInput