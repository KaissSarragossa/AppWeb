export default function App() {
  function handleMouseOver() {
      console.log("J'ai été survolé!")
  }
  
  
  return (
      <div className="container">
          <img src="https://picsum.photos/640/360" />
          <button onMouseOver className="value">{handleMouseOver}</button>
      </div>
  )
}