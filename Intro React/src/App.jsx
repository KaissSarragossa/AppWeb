import './app.css'
import Voiture from './Voiture.jsx'
import voitures from './voitures.js'

function App() {
 
const voituresElements = voitures.map(voiture => {
  return <Voiture
            key={voiture.id}
            marque={voiture.marque}
            model={voiture.model}
            couleur={voiture.couleur}
            annee={voiture.annee}
    />
  })

  return (
    <div>
      <h1>Liste voiture</h1>
      <div className='voiture-card'>
        {voituresElements}
      </div>
      
    </div>
  )
}
export default App;