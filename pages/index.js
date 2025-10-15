import Head from "next/head";

import Topnav from "../src/components/topnav";
import Homeinfo from "../src/components/home";
import Projects from "../src/components/projects/project";
import WorkingExerience from "../src/components/workingExperience";
import Contact from "../src/components/contact.jsx";
import Misc from "../src/components/misc";
export default function Home() {
  return (
    <>
      <Head>
        <title>WiDev </title>
        <meta name="portfolio" content="this is my personal portfolio" />
        <meta name="author" content="Wilson Developer" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex flex-col w-full ">
        <div className="max-w-[1700px] w-[85%] m-auto max-lg:w-[90%]">
          <Topnav />

          <div className="grid grid-cols-12 mt-16 gap-x-20 gap-y-5 ">
            <Homeinfo />
            <Projects />
            <WorkingExerience />
            <Contact />
            <Misc />
          </div>
        </div>
      </div>
    </>
  );
}
