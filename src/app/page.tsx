"use client";

import { Appointment } from "@/section/Appointment";
import { CreateAccount } from "@/section/CreateAccount";
import { Departments } from "@/section/Departments";
import { Faq } from "@/section/Faq";
import { Hero } from "@/section/Hero";
import { Services } from "@/section/Services";
import { Stats } from "@/section/Stats";
import { Team } from "@/section/Team";
import { Testimonials } from "@/section/Testimonials";


function Home() {
  return (
    <>
    <Hero />
    <Stats/>
    <Services />
    <Appointment />
    <Testimonials />
    <Team />
    <Faq />
    <Departments />
    <CreateAccount/>
    {/* temp div */}
    <div className='h-[4000px]'></div>
    </>
  );
}

export default Home;