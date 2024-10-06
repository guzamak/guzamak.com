import { useEffect, useState } from "react"

export default function ScrollIcon() {
    const [isOpacity,setOpacity] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(!isOpacity)
        }, 400);
        return () => clearInterval(interval)
    },[isOpacity])
    
  return (
    <div className="max-w-screen-2xl flex flex-col asolute bottom-10 left-1/2 pb-11 duration-1000" style={{opacity:isOpacity?1:0}}>
        <p className="text-white font-Pixelify text-2xl ">-scroll v-</p>
    </div>
  )
}
