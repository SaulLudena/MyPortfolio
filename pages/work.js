import Head from "next/head";
import Portfolio from "../src/components/projects/projects";
import Sidenav from "../src/components/sidenav/sidenav";
import Logo from "../src/components/logo";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>WiDev | Portfolio</title>
        <meta name="portfolio" content="this is my personal portfolio" />
        <meta name="author" content="Wilson Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full h-screen bg-[#121212] ">
        <div className="grid w-72 max-lg:fixed">
          <div className="flex flex-col justify-around h-full ">
            <Logo />
            <div className="grid h-full ">
              <div className="flex items-center justify-center">
                <Sidenav />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full overflow-y-scroll ">
          <div className="grid items-center w-10/12 ">
            {/*Put your component here */}
            <Portfolio projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = require("../data/projects.json");
  return {
    props: {
      projects,
    },
  };
}
