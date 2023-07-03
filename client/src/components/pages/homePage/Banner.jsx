import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="z-10">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 h-[390px]">
          <div className="flex h-full items-center b1">
            <div className="left md:w-1/2 text-left ps-24">
              <h1 className="text-2xl">Check out our leadership podcast</h1>
              <p className="text-sm mb-5">
                Leading Up With Better Dev can help you work, lead, and live
                differently. New episode every Wednesday.
              </p>
              <button className="btn px-4 py-2 bg-indigo-300 rounded-lg">
                Learn More
              </button>
            </div>
            <div className="right md:w-1/2"></div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 h-[390px]">
          <div className="flex h-full items-center b2">
            <div className="left md:w-1/2 text-left ps-24">
              <h1 className="text-2xl">Build ready-for-anything teams</h1>
              <p className="text-sm mb-5">
                See why leading organizations choose to learn with Better Dev
                Business.
              </p>
              <button className="btn px-4 py-2 bg-indigo-300 rounded-lg">
                Learn More
              </button>
            </div>
            <div className="right md:w-1/2"></div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 h-[390px]">
          <div className="flex h-full items-center b3">
            <div className="left md:w-1/2 text-left ps-24">
              <h1 className="text-2xl">Check out our leadership podcast</h1>
              <p className="text-sm mb-5">
                Leading Up With Better Dev can help you work, lead, and live
                differently. New episode every Wednesday.
              </p>
              <button className="btn px-4 py-2 bg-indigo-300 rounded-lg">
                Learn More
              </button>
            </div>
            <div className="right md:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
