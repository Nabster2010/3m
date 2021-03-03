import Link from "next/link";
import { useTranslation } from "react-i18next";

const Card = ({ service: { title, desc, img, link } }) => {
  const { t } = useTranslation("services");
  return (
    <div
      data-aos="fade-up"
      className="max-w-2xl mx-auto overflow-hidden border border-red-500 border-opacity-5 rounded-lg shadow-lg dark:bg-gray-800"
    >
      <img className="object-cover w-full h-64" src={img} alt="Article" />

      <div className="p-6">
        <div>
          <a
            href="#"
            className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {desc}
          </p>
          <Link href={link}>
            <a className="bg-transparent mt-3 bg-red-500 hover:bg-white font-semibold text-white py-2 px-4 border border-red-500 hover:text-red-500 inline-block rounded ">
              {t("more")}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
