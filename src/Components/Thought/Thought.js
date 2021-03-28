import React, { useEffect } from "react";

export default function Thought(props) {
    const { thought, removeThought } = props;

    const handleRemoveClick = () => {
        removeThought(thought.id);
    }

    useEffect(() => {
        const timeRemaining = thought.expireTime - Date.now();
        const timeout = setTimeout(() => {
            removeThought(thought.id)
        }, timeRemaining);
        return () => {
            clearTimeout(timeout);
        }
    },[thought]);

    return (
        <li className="thought">
            <button className="removeBtn" onClick={handleRemoveClick}>x</button>
            <div>{thought.text}</div>
        </li>
    )
}