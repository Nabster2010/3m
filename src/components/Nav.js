import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Nav = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("nav");

  return (
    <>
      <header className=" bg-black flex items-center justify-center h-screen1/10 lg:h-12Vh ">
        <div className="w-full container flex items-center justify-between">
          <div className="flex">
            <Link href="/">
              <a className="text-red-500 text-3xl font-bold px-4 md:px-1">
                العلياني
              </a>
            </Link>
            <img src="/images/3m.png" width="50" />
          </div>
          <nav className="flex items-center">
            <div className="hidden md:block">
              <Link href="/">
                <a className="text-white px-3 py-1 rounded hover:bg-red-500">
                  {t("home")}
                </a>
              </Link>
              <Link href="/services">
                <a className="text-white px-3 py-1 rounded hover:bg-red-500">
                  {t("services")}
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-white px-3 py-1 rounded hover:bg-red-500">
                  {t("contact us")}
                </a>
              </Link>
            </div>
            <Link
              href={router.route}
              locale={router.locale === "ar" ? "en" : "ar"}
            >
              <button className="text-white px-2 py-1 m-2 rounded hidden md:block">
                {t("locale")}
              </button>
            </Link>
          </nav>
        </div>
        <div className="md:hidden px-4">
          <a href="#menu" role="button" onClick={() => setOpen(!open)}>
            <span className="fa fa-bars fa-2x text-white"></span>
          </a>
        </div>
      </header>
      <div
        className={`overlay ${
          !open && "hidden"
        } md:hidden absolute top-0 left-0 z-20 w-full h-full bg-gray-800 bg-opacity-50 `}
        onClick={() => setOpen(!open)}
        onScrollCapture={() => setOpen(false)}
      ></div>
      <div
        className={`absolute top-18 ${
          !open && "hidden"
        } md:hidden right-0 min-h-full w-4/12 md:w-3/12 lg:w-2/12 bg-gray-800 z-20`}
      >
        <div className="p-3 border hover:bg-red-500 border-gray-700">
          <Link href="/">
            <a className="text-white ">{t("home")}</a>
          </Link>
        </div>
        <div className="p-3 border hover:bg-red-500 border-gray-700">
          <Link href="/services">
            <a className="text-white ">{t("services")}</a>
          </Link>
        </div>
        <div className="p-3 border hover:bg-red-500 border-gray-700">
          <Link href="/contact">
            <a className="text-white "> {t("contact us")}</a>
          </Link>
        </div>
        <Link href={router.route} locale={router.locale === "ar" ? "en" : "ar"}>
          <button className="text-white px-2 py-1 m-2 rounded">
            {t("locale")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Nav;
