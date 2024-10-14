import Appointment from "@/section/Appointment";
import Blog from "@/section/Blog";
import Faq from "@/section/Faq";
import Features from "@/section/Features";
import Hero from "@/section/Hero";
import Location from "@/section/Location";
import Services from "@/section/Services";
import Stats from "@/section/Stats";
import Team from "@/section/Team";
import Testimonials from "@/section/Testimonials";

function Home() {
  return (
    <>
    <Hero />
    <Stats />
    <Services />
    <Testimonials />
    <Team />
    <Faq />
    <Features />
    <Blog/>
    <Location />
    </>
  );
}

export default Home;