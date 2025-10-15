import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-full font-inter">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
