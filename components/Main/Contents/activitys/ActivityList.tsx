import { useEffect } from "react"
import Activity from "./Activity"
export default function ActivityList() {
  useEffect (() => {

  },[])
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-14">
        <h1 className="text-white text-4xl ">- Activity -</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 w-10/12 place-items-center gap-10">
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
        </div>
    </div>
  )
}
