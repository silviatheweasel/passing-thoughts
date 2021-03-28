import React, { useState } from 'react';
import { getExpireTime, generateID } from '../../Utilities/Utilities';

export default function ThoughtInputForm(props) {
    const [text, setText] = useState("");

    const handleChange = ({target}) => {
        setText(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.length > 0) {
            const thought = {
                id: generateID(),
                text: text,
                expireTime: getExpireTime()
            }
            props.addThought(thought);
            setText("");
        }
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="What's on your mind?"
                value={text}
                onChange={handleChange}
            >
            </input>
            <button type="submit" className="addBtn">Add</button>
        </form>
    )
}