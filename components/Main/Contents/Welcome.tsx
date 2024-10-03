import { useRef, useEffect, useState } from "react"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import { Hadou90 } from "./hadou90"
import ScrollIcon from "./ScrollIcon"

export default function Welcome() {
  const triggerRef = useRef(null)
  const canvasRef = useRef(null)
  const welcomeRef = useRef(null)
  const [istrigger, setIstrigger] = useState(false)
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0,})
  const {innerHeight,innerWidth} = useWindowDimensions()
  const [triggerY, setTriggerY] = useState(0)
  const [isAnimation, setIsAnimation] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const wheel = (e) => {
      const deltaY = e.deltaY;
      const newTriggerY =  Math.min(triggerY-(deltaY * 0.7),0)
      if (innerHeight+triggerY < 0){
        setIstrigger(true)
      }  else if (innerHeight+triggerY > (innerHeight * 0.5) ){
        setIstrigger(false)
      }
      if (window.scrollY == 0 ){
        setTriggerY(newTriggerY) // ^ this way
      }
    }
    const touchmove = (e) => {
      // console.log(e)
      if (e.target.dataset.notscroll || !isTouch) return; 
      const touch = e.touches[0];
      const deltaY = startPosition.y - touch.pageX;
      const newTriggerY =  Math.min(triggerY-(deltaY* 0.3),0)
      if (innerHeight+triggerY < 0){
        setIstrigger(true)
      }  else if (innerHeight+triggerY > (innerHeight * 0.5) ){
        setIstrigger(false)
      }
      if (window.scrollY == 0 ){
        setTriggerY(newTriggerY) // ^ this way
      }
    }

    const touchStart = (e) => {
      const touch = e.touches[0];
      setIsTouch(true)
      setStartPosition({x:touch.pageX, y:touch.pageY})
    }

    const touchEnd = (e) => {
    
      setIsTouch(false)
      setStartPosition({x:0, y:0})
    }

    const preventScroll = (e) => {
      window.scrollTo(0,0)
    } 
    window.addEventListener("wheel", wheel);
    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchend", touchEnd);
    window.addEventListener("touchmove", touchmove);
    
    if (!istrigger) {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', preventScroll);
    }
  
    return () => {
      document.body.style.height = 'auto';
      document.body.style.overflowY  = 'scroll';
      window.removeEventListener('scroll', preventScroll);
    }
  },[istrigger,triggerY,isTouch])

  useEffect(()=>{
    if (triggerY < -(innerHeight / 1000)){
      setIsAnimation(true)
    }else{
      setIsAnimation(false)
    }
  },[triggerY,innerHeight])

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = innerWidth
    canvas.height = innerHeight
    const ctx = canvas.getContext("2d");

    const hadou90s = []

    for (let i = 0;i < Math.round(innerWidth/5) ;i++){
      const x = Math.random() * innerWidth;
      const y = Math.random() * (3* innerHeight);
      const width = Math.random() * 0.5;
      const height = 100 + Math.random() * 500;
      const opacity = Math.random() * 0.25;
      const newHadou90 = new Hadou90(ctx,x,y,0,-10,width,height,"white",opacity,innerHeight)
      hadou90s.push(newHadou90);
    }

    let animationFrameId;
    const animation = () => {
      animationFrameId = window.requestAnimationFrame(animation);
      ctx.clearRect(0, 0, canvas.width, canvas.height);  
      for (var i = 0; i < hadou90s.length; i++){
        hadou90s[i].update()
      }
    }
    animation()

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
    
  },[innerHeight,innerWidth])

  return (
    <div className="w-screen  h-screen fixed bg-grey-06 z-10 duration-500 flex flex-col justify-center items-center transition-opacity" style={{opacity : istrigger ? 0 : 1,pointerEvents:istrigger ? "none" : "auto"}}
    ref={welcomeRef}>
      <div className="w-screen max-w-screen-2xl  h-screen flex flex-col justify-center items-center">
       <h1 className="font-bold font-Pixelify text-2xl md:text-4xl text-white"> Welcome To my Porforlio</h1>
       <h1 className="font-bold font-Jacquarda_Bastarda text-sm md:text-base text-gray-100"> yokoso watashi no Porforlio</h1>
      </div>
      <div className="bg-red-500 absolute bottom-0 invisible" ref={triggerRef} style={{transform : `translateY(${triggerY}px)`}}>trigger</div>
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-20 blur-[1.5px] duration-500" style={{opacity : isAnimation ? 1 : 0}}></canvas>
      <ScrollIcon/>
    </div>
  )
}
