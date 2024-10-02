import { useRef, useEffect, useState } from "react"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import { Hadou90 } from "./hadou90"

export default function Welcome() {
  const triggerRef = useRef(null)
  const canvasRef = useRef(null)
  const [isPlay, setIsPlay] = useState(false)
  const [startPosition, setStartPosition] = useState(0)
  const {innerHeight,innerWidth} = useWindowDimensions()
  const [triggerY, setTriggerY] = useState(0)

  useEffect(() => {
    const checkScroll = (e) => {
      const deltaY = e.deltaY;
      const newTriggerY =  Math.min(triggerY-(deltaY * 0.7),0)
      if (innerHeight+triggerY < 0){
        setIsPlay(true)
      } else if (innerHeight+triggerY > (innerHeight * 0.4) && window.scrollY == 0 ){
        setIsPlay(false)
        setTriggerY(newTriggerY) // ^ this way
      }
      else if (window.scrollY == 0){
        setTriggerY(newTriggerY) // ^ this way
      }
    }
    const touchmove = (e) => {
      e.preventDefault()
    }
    const touchstart = (e) => {

    }
    const pervertScroll = (e) => {
      window.scrollTo(0,0)
    } 
    const prevertEvent = (e) => {
      e.preventDefault()
    }
    window.addEventListener("wheel", checkScroll, { passive: false });
    if (!isPlay) {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
      window.addEventListener("wheel", prevertEvent, { passive: false });
      window.addEventListener("touchstart", checkScroll);
      window.addEventListener("touchmove", checkScroll, { passive: false });
      window.addEventListener('scroll', pervertScroll);
    }
  
    return () => {
      document.body.style.height = 'auto';
      document.body.style.overflowY  = 'scroll';
      window.removeEventListener("touchstart", checkScroll);
      window.removeEventListener('scroll', pervertScroll);
      window.removeEventListener("wheel", prevertEvent);
      window.removeEventListener("touchmove", checkScroll);
    }
  },[isPlay,triggerY])

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = innerWidth
    canvas.height = innerHeight
    const ctx = canvas.getContext("2d");

    const hadou90s = []

    for (let i = 0;i < 500 ;i++){
      const x = Math.random() * innerWidth;
      const y = Math.random() * innerHeight;
      const width = Math.random() * 10;
      const height = 100 + Math.random() * 100;
      const newHadou90 = new Hadou90(ctx,x,y,0,-10,width,height,"white")
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
    <div className="w-screen  h-screen fixed bg-grey-06 pointer-events-none z-10 duration-500 flex justify-center items-center" style={{opacity : isPlay ? 0 : 1}}>
      <div className="w-screen max-w-screen-2xl  h-screen flex flex-col justify-center items-center">
       <h1 className="font-bold font-Pixelify text-4xl text-white"> Welcome To my Porforlio</h1>
       <h1 className="font-bold font-Jacquarda_Bastarda text-gray-100"> yokoso watashi no Porforlio</h1>
      </div>
      <div className="bg-red-500 absolute bottom-0 invisible" ref={triggerRef} style={{transform : `translateY(${triggerY}px)`}}>trigger</div>
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-20 blur-sm opacity-15"></canvas>
      <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white">SCROLL ^</p>
    </div>
  )
}
