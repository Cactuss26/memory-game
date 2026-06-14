import Card from "./Card.jsx"
import { NO_OF_IMAGES } from "./config.jsx";

const keyset = new Set();
while(keyset.size < NO_OF_IMAGES) keyset.add(window.crypto.randomUUID());
let cardkeys = Array.from(keyset);

let keymap = {};
cardkeys.map((key, index) => {
    keymap[key] = index;
})

export default function CardHolder({images, names, updateScore, resetGame}) {
    // shuffle cards when user clicks on one
    function shuffleCards() {
        cardkeys = cardkeys.map(key => ({ key, sort: Math.random() }))
                           .sort((a, b) => a.sort - b.sort)
                           .map(({ key }) => key); 
    }
    
    function resetKeys() {
        const keyset = new Set();
        while(keyset.size < NO_OF_IMAGES) keyset.add(window.crypto.randomUUID());
        cardkeys = Array.from(keyset);
        keymap = {};
        cardkeys.map((key, index) => {
          keymap[key] = index;
        })
    }


    const cards = cardkeys.map((cardkey) => {
        return <Card 
        key={cardkey} 
        imageurl={images[keymap[cardkey]]} 
        name={names[keymap[cardkey]]} 
        shufflefunc={shuffleCards}
        updateScore={updateScore}
        resetGame={resetGame}
        resetKeys={resetKeys}/>
    })

    return (
        <>{cards}</>
    )
}