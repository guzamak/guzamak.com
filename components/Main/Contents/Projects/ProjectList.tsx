import Filterbox from "./Filterbox"
import Project from "./Project"
export default function ProjectList() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-y-12 rounded-2xl mt-28 mx-56">
        <h1 className="text-white text-4xl bg-gradient-to-br from-white to-grey-10 bg-clip-text">- Project -</h1>
        <div className="flex  gap-4 w-full">
          <Filterbox />
          <Filterbox />
          <Filterbox />
        </div>
        <div className="flex gap-10 w-full justify-center">
          <Project />
          <Project />
          <Project />
        </div>
    </div>
  )
}
