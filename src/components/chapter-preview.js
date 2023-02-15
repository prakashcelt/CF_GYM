import React, { useEffect } from "react";
import GLightbox from "glightbox";
import data from "../data/chapterpreview.json";
import datas from "../data/chapterPreview2.json";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";

const Chapterpreview = ({ isBg }) => {
  const { chapterPreview } = data;
  const { chapterPreview2 } = datas;
  useEffect(() => {
    GLightbox({
      selector: ".glightbox2",
      slideEffect: "zoom",
    });
  }, []);

  return (
    <section
      id="justus"
      className={`section-padding chapter-preview ${
        isBg === "yes" ? "bg-one" : "bg-two"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{chapterPreview.title}</span>
              <h2 className="display-6">{chapterPreview.subtitle}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>

        <div className="row testi-row">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {chapterPreview.chapters.map((data, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide p-5px-lr translateEffect2">
                    <a
                      href={data.image}
                      className="glightbox2"
                      data-glightbox={`description: ;`}
                    >
                      <img
                        className="chapter-img img-fluid"
                        src={data.image}
                        alt={data.title}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <br />
            <div className="swiper2
            ">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              
              // autoplay
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {chapterPreview2.chapters.map((datas, i) => (
                <SwiperSlide 
                height="100"
                key={i}>
                  <div className="swiper-slide p-5px-lr translateEffect2">
                    <a
                      href={datas.image}
                      className="glightbox2"
                      data-glightbox={`description: ;`}
                    >
                      <img
                        className="chapter-img img-fluid"
                        src={datas.image}
                        alt={datas.title}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapterpreview;
