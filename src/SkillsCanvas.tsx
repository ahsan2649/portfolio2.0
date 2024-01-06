import { useEffect } from "react";
import { useRef } from "react";


class Particle {

  ReDraw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.AddVelocity(canvas); 
    this.DrawParticle(ctx);
  }

  x: number;
  y: number;
  velX: number;
  velY: number;
  constructor(w: number, h: number, mv: number) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.velX = (Math.random() - 0.5) * 2 * mv
    this.velY = (Math.random() - 0.5) * 2 * mv
  }

  private DrawParticle(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  private AddVelocity(canvas: HTMLCanvasElement) {
    if (this.x + this.velX > canvas.width || this.x + this.velX < 0) {
      this.velX *= -1;
    }
    if (this.y + this.velY > canvas.height || this.y + this.velY < 0) {
      this.velY *= -1;
    }
    this.x += this.velX;
    this.y += this.velY;

    
  }
}


function SetupCanvas(canvasRef: React.MutableRefObject<HTMLCanvasElement | null>) {
  let particles: Particle[] = []
  let maxParticles = 150;
  let maxVelocity = 1.25;
  let maxLineDistance = 150;
  let lineWidth = 2.5;
  if (!canvasRef.current) { return; }
  if (!canvasRef.current.parentElement) { return; }
  
  const canvas = canvasRef.current;
  

  let w = canvas.width = canvasRef.current.parentElement.clientWidth;
  let h = canvas.height = canvasRef.current.parentElement.clientHeight;

  
  const ctx = canvas.getContext("2d");
  if (!ctx) { return; }
  
  for (let index = 0; index < maxParticles; index++) {
    particles.push(new Particle(w, h, maxVelocity))
  }

  window.onresize = ()=>{
    if (!canvasRef.current) { return; }
    if (!canvasRef.current.parentElement) { return; }

    w = canvas.width = canvasRef.current.parentElement.clientWidth;
    h = canvas.height = canvasRef.current.parentElement.clientHeight;
  }

  loop();


  function loop() {
    if (!ctx) { return; }
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);

    for (let index = 0; index < particles.length; index++) {
      const element = particles[index];
      element.ReDraw(ctx, canvas);
    }

    for (let index = 0; index < particles.length; index++) {
      const element = particles[index];
      for (let jindex = 0; jindex < particles.length; jindex++) {
        if (index == jindex) continue;
        const jelement = particles[jindex];
        let distance = Math.sqrt(Math.pow((element.x - jelement.x), 2) + Math.pow((element.y - jelement.y), 2))
        if (distance > maxLineDistance) { continue; }
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = `rgba(255,255,255,${0.75 - distance / maxLineDistance})`
        ctx.beginPath()
        ctx.moveTo(element.x, element.y)
        ctx.lineTo(jelement.x, jelement.y)
        ctx.closePath()
        ctx.stroke()

      }
    }

    requestAnimationFrame(loop);
  }
}



export function SkillsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    SetupCanvas(canvasRef);

  }, []);

  return <canvas ref={canvasRef} id="skills-canvas"></canvas>;
}

