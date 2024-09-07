"use client"
import Introduction from "@/components/Main/Contents/Introduction";
import Hero from "@/components/Main/Hero/Hero";
import ProjectList from "@/components/Main/Contents/Projects/ProjectList";
import ActivityList from "@/components/Main/Contents/activitys/ActivityList";
import Banner from "@/components/Main/Contents/Banner";
import Skill from "@/components/Main/Contents/Skill";
export default function Home() {
  return (
    <main className="bg-grey-06 overflow-x-hidden">
      <Hero />
      <Introduction />
       <ProjectList />
      {/* <ActivityList /> */}
      {/* <Banner />
      <Skill /> */}
    </main>
  );
}
