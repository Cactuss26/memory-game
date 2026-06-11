import Card from "./Card.jsx"
import { NO_OF_IMAGES } from "./config.jsx";

const keyset = Set();
for (let i = 0; i < NO_OF_IMAGES; i++) keyset.add(Math.floor(Math.random() * (NO_OF_IMAGES)));
let cardkeys = Array.from(keyset);

export default function CardHolder({images, names, updateScore, resetGame}) {

    // shuffle cards when user clicks on one
    function shuffleCards() {
        cardkeys = cardkeys.map(key => ({ key, sort: Math.random() }))
                           .sort((a, b) => a.sort - b.sort)
                           .map(({ key }) => key); 
    }
    
    const cards = cardkeys.map(cardkey => {
        return <Card 
        key={cardkey} 
        imageurl={images[cardkey]} 
        name={names[cardkey]} 
        shufflefunc={shuffleCards}
        updateScore={updateScore}
        resetGame={resetGame}/>
    })

    return (
        <>{cards}</>
    )
}