import Services from "../src/components/Services";
import SlideShow from "../src/components/SlideShow";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Home() {
  return (
    <>
      <SlideShow />
      <Services />
    </>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "nav",
      "slideShow",
      "services",
      "footer",
    ])),
  },
});
