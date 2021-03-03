import React from "react";
import Services from "../../src/components/Services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const index = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default index;
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
