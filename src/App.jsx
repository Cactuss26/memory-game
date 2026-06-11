import { useState, useEffect } from 'react'
import CardHolder from './components/CardHolder'
import Scoreboard from './components/Scoreboard';
import { NO_OF_IMAGES, MAX_ID } from './components/config';
import './App.css'

function App() {
    const [score, setscore] = useState(0);
    const [bestScore, setbestScore] = useState(0);
    const [images, setimages] = useState([]);
    const [names, setnames] = useState([]);

    // fetch images
    useEffect(() => {
        let isMounted = true;

        async function fetchData(id) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return await res.json();
        }

        async function loadData() {
            const requests = [];

            const idset = new Set();
            for (let i = 0; i < NO_OF_IMAGES; i++) idset.add(Math.floor(Math.random() * (MAX_ID - 1)) + 1);
            const ids = Array.from(idset);
            ids.map(id => requests.push(fetchData(id)));

            const responses = Promise.all(requests);
            const responses2 = responses.map(response => response.clone());
    
            const extractedImages = responses.map(response => {
                if (isMounted) {
                     return response.sprites.front_default;
                }
            })
    
            const extractedNames = responses2.map(response => {
                if (isMounted) {
                    return response.name;
                }
            })
            
            if (isMounted) {
                setimages(extractedImages);
                setnames(extractedNames);
            }
        }

        loadData();
        return () => {
            isMounted = false;
        }
    }, [])

    const updateScore = () => {
        setscore(score + 1);
    }

    const resetGame = () => {
        setbestScore(score);
        setscore(0);
    }

    return (
        <div>
            <CardHolder images={images} names={names} updateScore={updateScore} resetGame={resetGame}/>
            <Scoreboard score={score} bestScore={bestScore}/>
        </div>
    )
}

export default App
