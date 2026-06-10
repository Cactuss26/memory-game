import Card from "./Card.jsx"

export default function CardHolder({images}) {
    const NO_OF_IMAGES = images.length;
    const cardkeys = {}
    for (let i = 0; i < NO_OF_IMAGES; i++) cardkeys.push(Math.floor(Math.random(NO_OF_IMAGES - 1 + 1)) + 1)

    const cards = cardkeys.map(cardkey => {
        return <Card key={cardkey} imageurl={images[cardkey]}/>
    })

    return (
        <>{cards}</>
    )
}