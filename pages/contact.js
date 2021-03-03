import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const contact = () => {
  const { t } = useTranslation("common");
  return (
    <div className=" px-4 container flex flex-col items-center md:items-start md:flex-row my-4 mx-auto justify-between">
      <div className="my-4  p-5 shadow-xl">
        <div className="">
          <i className="fas fa-map-marker-alt fa-2x text-gray-500"></i>
          <span className="p-3">{t("address")}</span>
        </div>
        <div className="my-4">
          <i className="fas fa-phone fa-2x text-gray-500"></i>
          <span className="p-3">050000000</span>
        </div>
        <div className="my-4">
          <i className="fas fa-envelope fa-2x text-gray-500"></i>
          <span className="p-3">user@email.com</span>
        </div>
      </div>
      <div className=" border-gray-400 border-2 p-1 w-96 md:w-130 h-96 md:h-130 shadow-lg ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674500.4901739433!2d46.18297698325666!3d25.92276492859695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef36820c2453%3A0xf5dec96321079320!2sAutofal%203m!5e0!3m2!1sen!2ssa!4v1614242750286!5m2!1sen!2ssa"
          className="w-full h-full"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default contact;
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
