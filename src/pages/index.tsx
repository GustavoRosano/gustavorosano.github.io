import Head from "next/head";
import Link from "next/link";

import PrincipalSection from "@/components/home/principal-section";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import Knowledge from "@/components/home/knowledge";
import Contact from "@/components/home/contact";

const Home = () => {
  return (
    <>
    <Head>
      <title>Gustavo Teixeira</title>
    </Head>
      <main>
        <PrincipalSection />
        <About />
        <Projects />
        <Knowledge />
        <Contact />
      </main>
    </>
  );
}

export default Home;