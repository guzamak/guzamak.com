import Activity from "./Activity"
import { activityData } from "@/lib/datas"

export default function ActivityList() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-14">
        <h1 className="text-white text-4xl font-Pixelify">- Activity -</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 w-10/12 place-items-center gap-10">
            {activityData.map((act,i)=>(
              <Activity imagePath={act.imagePath} title={act.title} desc={act.description} key={i}/>
            ))}
        </div>
    </div>
  )
}
