import { useTranslation } from "react-i18next";
import Card from "./Card";

const Services = () => {
  const { t } = useTranslation("services");
  const services = [
    {
      id: 1,
      title: t("external"),
      desc: t("external-text"),
      img: "/images/card1.jpg",
      link: "/services/external",
    },
    {
      id: 2,
      title: t("internal"),
      desc: t("internal-text"),
      img: "/images/card2.jpg",
      link: "/services/internal",
    },
    {
      id: 3,
      title: t("tint"),
      desc: t("tint-text"),
      img: "/images/card3.jpg",
      link: "/services/tint",
    },
    {
      id: 4,
      title: t("protection"),
      desc: t("protection-text"),
      img: "/images/card4.jpg",
      link: "/services/protection",
    },
    {
      id: 5,
      title: t("glass"),
      desc: t("glass-text"),
      img: "/images/card5.jpg",
      link: "/services/glass",
    },
  ];

  return (
    <div className="container mx-auto text-center">
      <h1
        data-aos="zoom-in-up"
        className="my-6 px-6  py-3 text-4xl font-bold bg-red-500 text-white rounded-md shadow-md inline-block "
      >
        {t("services")}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 self-center">
        {services.map((service) => (
          <Card service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
