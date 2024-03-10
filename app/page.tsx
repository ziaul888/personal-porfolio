import Image from 'next/image'
import Intro from "@/components/Intro";
import Divider from '@/components/Divider';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <Divider/>
      <About/>
      <Projects/>
        <Skill/>
        <Experience/>
    </main>
  )
}
