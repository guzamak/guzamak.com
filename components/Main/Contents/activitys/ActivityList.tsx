import { useEffect } from "react"
import Activity from "./Activity"
export default function ActivityList() {
  useEffect (() => {

  },[])
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
        <h1 className="text-transparent text-4xl bg-gradient-to-br from-white to-grey-10 bg-clip-text">- Activity -</h1>
        <div>
            <Activity />
        </div>
    </div>
  )
}
