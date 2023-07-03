import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Review = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold my-10">
          How learners like you are achieving their goals
        </h1>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="flex gap-10 px-16">
            <div className="card md:w-1/2 md:flex md:flex-col items-center justify-center border-2">
              <div className="flex gap-5 mb-5">
                <img
                  src="https://img.20mn.fr/kGUR4sGlQAOfZ_zvc-52Mw/1200x768_macroniste-pierre-person-gagne-circonscription-paris"
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left">
                  <p>Akther uz zaman</p>
                  <p className="text-sm">CEO, Coursera</p>
                  <div className="rating text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>
                "This course helped me freshen up on my product manager skills
                and land a job at Facebook! Thanks guys
              </p>
            </div>
            <div className="card md:w-1/2 md:flex md:flex-col items-center justify-center border-2 p-10">
              <div className="flex gap-5 mb-5">
                <img
                  src="https://img.20mn.fr/kGUR4sGlQAOfZ_zvc-52Mw/1200x768_macroniste-pierre-person-gagne-circonscription-paris"
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left">
                  <p>Phillip Watson</p>
                  <p className="text-sm">Intern, Coursera</p>
                  <div className="rating text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>
                "I am proud to say that after a few months of taking this
                course...I passed my exam and am now an AWS Certified Cloud
                Practitioner! This content was exactly what the CCP exam
                covered.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex gap-10 px-16">
            <div className="card md:w-1/2 md:flex md:flex-col items-center justify-center border-2">
              <div className="flex gap-5 mb-5">
                <img
                  src="https://img.20mn.fr/kGUR4sGlQAOfZ_zvc-52Mw/1200x768_macroniste-pierre-person-gagne-circonscription-paris"
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left">
                  <p>Robert Bruce</p>
                  <p className="text-sm">Sr Developer, Well Dev</p>
                  <div className="rating text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>
                "One of the best courses on management and leadership I have
                come across so far. The advice is practical, and examples highly
                relatable. Would help anyone become a better manager.
              </p>
            </div>
            <div className="card md:w-1/2 md:flex md:flex-col items-center justify-center border-2 p-10">
              <div className="flex gap-5 mb-5">
                <img
                  src="https://img.20mn.fr/kGUR4sGlQAOfZ_zvc-52Mw/1200x768_macroniste-pierre-person-gagne-circonscription-paris"
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left">
                  <p>Sanjay Khan</p>
                  <p className="text-sm">Jr Devloper, Coders Hub</p>
                  <div className="rating text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>
                "I highly recommend this course for all budding data scientists.
                Even people with no prior knowledge of any visualization tools
                can become a master after completing this course.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Review;
