import React from "react";
import CustomCard from "../../shared/components/CustomCard/CustomCard";
import Header from "../../components/Header/Header";

const Services = () => {
  return (
    <>
      <Header />
      <div className="bg-white mt-12">
        <div>
          <span>THIS IS WHAT</span>
          <br />
          <span className="font-bold text-2xl">WE SERVE</span>
        </div>
        <div className="flex gap-6 items-center justify-center mb-12 mt-12">
          <CustomCard
            imageUrl="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Birthday Parties"
            description="Elevating celebrations with unforgettable parties"
          />
          <CustomCard
            imageUrl="https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Weddings"
            description="Crafting enchanting weddings, where dreams become reality."
          />
          <CustomCard
            imageUrl="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Conferences"
            description="Transforming conferences into impactful experiences."
          />
        </div>
        <div className="flex gap-6 items-center justify-center">
          <CustomCard
            imageUrl="https://images.pexels.com/photos/5638612/pexels-photo-5638612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Reunion"
            description="We ensures smooth rollout of onboarding passes to the event atendees include secure payment options"
          />
          <CustomCard
            imageUrl="https://images.pexels.com/photos/7648476/pexels-photo-7648476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Meetings"
            description="We ensures smooth rollout of onboarding passes to the event atendees include secure payment options"
          />
          <CustomCard
            imageUrl="https://images.pexels.com/photos/17748109/pexels-photo-17748109/free-photo-of-gourment-meal-on-a-restaurant-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Dinners"
            description="We ensures smooth rollout of onboarding passes to the event atendees include secure payment options"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
