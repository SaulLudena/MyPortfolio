import "../styles/global.css";
import "../styles/customStyles.css";
import "../styles/animation.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
