import { useState } from "react";

export default function Card({imageurl, name, shufflefunc, updateScore, resetGame}) {
    const [selected, changeselected] = useState(0);

    return (
        <button type="button" onClick={() => {
            if (selected === 0) {
                changeselected(1);
                shufflefunc();
                updateScore();
            }

            else {
                changeselected(0);
                shufflefunc();
                resetGame();
            }
        }}>
            <img src={imageurl} alt={name}/>
        </button>
    )
}