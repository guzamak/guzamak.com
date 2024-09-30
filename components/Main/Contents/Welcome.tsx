import { useRef, useEffect, useState } from "react"

export default function Welcome() {
  const triggerRef = useRef(null)
  const [isPlay, setIsPlay] = useState(false)
  const [startPosition, setStartPosition] = useState(0)

  useEffect(() => {
    const checkScroll = (e) => {
      e.preventDefault()
      console.log(e)
    }
    if (!isPlay) {
      window.addEventListener("wheel", checkScroll, { passive: false });
      window.addEventListener("touchmove", checkScroll, { passive: false });
    }
  
    return () => {
      window.removeEventListener("wheel", checkScroll);
      window.removeEventListener("touchmove", checkScroll);
    }
  },[isPlay])

  return (
    <div className="w-screen  h-screen fixed bg-black pointer-events-none z-10">
      <div className="w-screen max-w-screen-2xl  h-screen text-white">
        Welcome To my Porforlio
      </div>
      <div className="bg-red-500 absolute bottom-0" ref={triggerRef} >trigger</div>
      <canvas></canvas>
      <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white">scroll</p>
    </div>
  )
}
