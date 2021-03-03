import { useEffect } from "react";
import Layout from "../src/components/layouts/layout";
import "aos/dist/aos.css";
import "normalize.css/normalize.css";
import "../styles/slider-animation.css";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

import AOS from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
