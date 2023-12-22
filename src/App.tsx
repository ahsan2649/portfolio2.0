import './App.css'

function App() {

  return (
    <>
      <HeroSection/>
    </>
  )
}

export default App
function HeroSection() {
  return <div id='hero'>
    <div id="hero-name"><h1>Ahsan</h1></div>
    <div id='cursor'></div>
    <div id="hero-caption"><h2>Programming<br />Polyglot</h2></div>
  </div>
}

