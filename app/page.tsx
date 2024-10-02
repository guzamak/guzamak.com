"use client"
import Introduction from "@/components/Main/Contents/Introduction";
import Hero from "@/components/Main/Hero/Hero";
import ProjectList from "@/components/Main/Contents/Projects/ProjectList";
import ActivityList from "@/components/Main/Contents/activitys/ActivityList";
import Skill from "@/components/Main/Contents/Skill";
import Welcome from "@/components/Main/Contents/Welcome";
import { useEffect } from "react";
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
