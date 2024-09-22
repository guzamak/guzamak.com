import { useEffect } from "react"
import Activity from "./Activity"
const activityData = [
  {imagePath: "/tobeit.jpg", title: "ToBeIT'67 The Second", description:"By Information Technology (IT) KMITL.",},
  {imagePath: "/jwc.jpg", title: "JWC 13", description:"By THAI WEBMASTER & ONLINE MEDIA ASSOCIATION.",},
  {imagePath: "/itcamp.jpg", title: "IT Camp 19", description:"By Information Technology (IT) KMITL.",},
  {imagePath: "/jpc.jpg", title: "JPC16", description:"By School of Information Technology (SIT) KMUTT.",},
]

export default function ActivityList() {
  useEffect (() => {

  },[])
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-14">
        <h1 className="text-white text-4xl ">- Activity -</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 w-10/12 place-items-center gap-10">
            {activityData.map((act,i)=>(
              <Activity imagePath={act.imagePath} title={act.title} desc={act.description} key={i}/>
            ))}
        </div>
    </div>
  )
}
