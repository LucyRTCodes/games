import { useEffect } from "react";
import "../styles/global.css";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      window.location.reload();
    });
  });
  return (
    <>
      <Component {...pageProps}></Component>
    </>
  );
}

export default App;
