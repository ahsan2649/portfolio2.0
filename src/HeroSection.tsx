import circlesVideo from "./assets/Shattered Circles.mp4";

export function HeroSection() {
  return <div id='hero-section'>
    <div id="hero-bg">
      <video src={circlesVideo} autoPlay loop muted></video>
    </div>
    <div id="hero-name"><h1>Ahsan</h1></div>
    <div id='cursor'></div>
    <div id="hero-caption"><h2>Programming<br/>Polyglot</h2></div>
  </div>;
}
