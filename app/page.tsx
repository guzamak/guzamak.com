"use client"
import Introduction from "@/components/ui/Introduction";
import Hero from "@/components/hero/Hero";
import ProjectList from "@/components/projects/ProjectList";
import ActivityList from "@/components/activitys/ActivityList";
import Skill from "@/components/ui/Skill";
import Welcome from "@/components/scroll/Welcome";
export default function Home() {
  return (
    <main className="bg-grey-06 flex flex-col gap-24 overflow-hidden">
      <Welcome />
      <Hero />
      <Introduction />
       <ProjectList />
      <ActivityList />
      <Skill />
    </main>
  );
}
