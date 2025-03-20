import { useState } from "react"
import './count.css'

export default function Count() {
    const [counter, setCounter] = useState(0)

    function add() {
        setCounter(counter + 1)
    }

    function subStract() {
        setCounter(counter- 1)
    }

    return (
        <main className="container">
            
            <h1>
                Combien de fois mon enseignant va-t-il dire le mot state dans ce chapitre ?
            </h1>
            
            <div className="counter">
                <button onClick={subStract} className="minus" aria-label="Decrease count">– </button>
                <h2 className="count">{counter}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}