import Head from "next/head";
import Presentation from "../src/components/presentation";
import Sidenav from "../src/components/sidenav/sidenav";
import Logo from "../src/components/logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>WiDev </title>
        <meta name="portfolio" content="this is my personal portfolio" />
        <meta name="author" content="Wilson Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full h-screen ">
        <div className="grid w-72 max-lg:fixed">
          <div className="flex flex-col justify-around h-full ">
            <Logo />
            <div className="grid h-full ">
              <div className="flex items-center justify-center ">
                <Sidenav />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full ">
          <div className="grid items-center w-10/12 ">
            {/*Put your component here */}
            <Presentation />
          </div>
        </div>
      </div>
    </>
  );
}
