import Head from "next/head";
import NavBar from "../src/components/navbar/navbar";
import Projects from "../src/components/projects/projects";
import Contact from "../src/components/contact";
import Presentation from "../src/components/presentation";
import Experience from "../src/components/experience/experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>WiDev </title>
        <meta name="portfolio" content="this is my personal portfolio" />
        <meta name="author" content="Wilson Developer" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="relative flex flex-col w-full">
        <div className="max-w-[1600px] w-[80%]  m-auto ">
          <NavBar />
          <Presentation />
          <Experience />
        </div>
        <Contact />
      </div>
    </>
  );
}
