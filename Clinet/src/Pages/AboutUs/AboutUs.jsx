import { FaCircle } from "react-icons/fa";
import image from "../../assets/about.jpg";
import About from "../../Components/AboutUs/About";
import Banner from "../../ReusedComponents/Banner/Banner";
import ContactUs from "../../Components/ContactUs/ContactUs";
import OurCEO from "../../Components/OurCEO/OurCEO";

export default function AboutUs() {
  return (
    <div>
      <Banner
        image={image}
        route={"About us"}
        tittle={"About Us"}
        text={
          "Welcome to Tempo Tutors, where we offer diverse classes for all ages and skill levels. Join us and unlock your musical potential today!"
        }
      />
      <div className="">
        <div className="my-[10%]">
          <About />
        </div>
        {/* ceo section */}
        <OurCEO/>
      </div>
      <div className="xl:w-[80%] lg:w-[80%] md:w-[90%]  mx-auto">
        <ContactUs />
      </div>
    </div>
  );
}
