import Greeting from "../components/Greeting";
import Hero from "../components/hero/Hero";
import KeyLink from "../components/KeyLiks";
import Laboratories from "../components/Laboratories";
import Image from "next/image";
import NewsLetter from "./newsletter/NewsLetter";
import ProgramsSlide from "../components/research/ProgramsSlide";
import BlogSlide from '../components/blogSlide/BlogSlide'

export default function Home() {
  return (
    <>
      <Hero />
      <KeyLink />
      <Greeting />
      <Laboratories />
      <ProgramsSlide />
      <BlogSlide />
      <NewsLetter />
    </>
  );
}
