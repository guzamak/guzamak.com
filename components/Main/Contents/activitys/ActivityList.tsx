import { useEffect } from "react"
import Activity from "./Activity"
export default function ActivityList() {
  useEffect (() => {

  },[])
  return (
    <div className=" flex flex-col items-center gap-y-16 mt-28 mx-56 min-h-screen">
        <h1 className="text-white text-4xl bg-gradient-to-br from-white to-grey-10 bg-clip-text">- Activity -</h1>
        <div className="flex w-full gap-10 justify-center px-20">
            <Activity />
            <Activity />
        </div>
    </div>
  )
}
