import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const SlideShow = () => {
  const { t } = useTranslation("slideShow");
  const content = [
    {
      title: t("title1"),
      description: t("desc1"),
      image: "/images/showcase1.jpg",
    },
    {
      title: t("title2"),
      description: t("desc2"),
      image: "/images/showcase2.jpg",
    },
    {
      title: t("title3"),
      description: t("desc3"),
      image: "/images/showcase3.jpg",
    },
  ];
  return (
    <div>
      <Slider className="slider-wrapper" autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{t("more")}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
