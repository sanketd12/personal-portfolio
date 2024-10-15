import Image from "next/image";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
export default function Home() {
  return (
    <>
    <Header></Header>
    <main>
    <Hero></Hero>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    </main>
    </>
  );
}
