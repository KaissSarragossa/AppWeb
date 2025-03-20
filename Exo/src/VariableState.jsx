import { useState } from "react"
import './variableState.css'

export default function VariableState() {
    const [isImportant, setIsImportant] = useState("Oui")
    
    function handleClick() {
        setIsImportant("Bien sûr")
    }
    
    return (
        <main>
            <h1 className="title">Est-il important de connaître les states?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}