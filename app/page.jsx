"use client";
import {
  CarrouselQuestions,
  CarrouselServices,
  Description,
  RegistrationForm,
} from "@/components";
import ContactButton from "@/components/ContactButton";

const Home = () => {
  return (
    <div className="relative mx-auto flex flex-col overflow-hidden h-full justify-around items-center fade-in">
      <Description />
      <CarrouselServices />
      <ContactButton/>
      <CarrouselQuestions />
    </div>
  );
};

export default Home;
