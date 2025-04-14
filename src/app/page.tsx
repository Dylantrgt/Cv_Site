import Hero from "@/components/Hero";
import Competences from "@/components/Competences";
import Image from "next/image";
import Hobbies from "@/components/Hobbies";
import Education from "@/components/Education";
import Expériences from "@/components/Experiences";

export default function Home() {
  return (
    <>
    <Hero/>
    <Education/>
    <Expériences/>
    <Competences/>
    <Hobbies/>
    </>
  );
}
