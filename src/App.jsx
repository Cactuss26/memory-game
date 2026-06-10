import { useState, useEffect } from 'react'
import CardHolder from './components/CardHolder'
import Scoreboard from './components/Scoreboard';
import './App.css'

const NO_OF_IMAGES = 14;
const MAX_ID = 1000;
let images = [];

function App() {
    const [score, setscore] = useState(0);
    const [bestScore, setbestScore] = useState(0);

    // fetch images
    useEffect(() => {
        for (let i = 0; i < NO_OF_IMAGES; i++) {
                const id = Math.floor(Math.random() * (MAX_ID - 1 + 1)) + 1;
                const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const resJson = response.json();
                const image = resJson.sprites.front_default;
                images.push(image);
            }
    }, [])

    return (
        <div>
            <CardHolder images={images}/>
            <Scoreboard score={score} bestScore={bestScore}/>
        </div>
    )
}

export default App
