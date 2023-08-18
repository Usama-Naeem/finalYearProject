import React from "react";
import ReusableCarousel from "../../shared/components/TailwindCarousal/TailwindCarousal";
import { BackgroundBlogCard } from "../../shared/components/TailwindCards/TailwindCards";
import { data } from "../../shared/data/data";
import Header from "../../components/Header/Header";

const UpcommingEvents = () => {
  return (
    <>
      <Header />
      <div className="bg-white mt-12">
        <div>
          <span>Upcomming</span>
          <br />
          <span className="font-bold text-2xl">Events</span>
        </div>
        <ReusableCarousel
          cards={data.map((el) => {
            return (
              <BackgroundBlogCard
                title={el.title}
                description={el.description}
                time={el.date}
                location={el.location}
              />
            );
          })}
        />
      </div>
    </>
  );
};

export default UpcommingEvents;
