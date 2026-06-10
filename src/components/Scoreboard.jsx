export default function Scoreboard({score, bestScore}) {
    return (
        <div>
            <h3>"Score:"</h3>
            <p>`Score: ${score}`</p>
            <p>`Best Score: ${bestScore}`</p>
        </div>
    )
}