import { FaCircle } from "react-icons/fa";
import image from "../../assets/about.jpg";
import About from "../../Components/AboutUs/About";
import Banner from "../../ReusedComponents/Banner/Banner";
import ContactUs from "../../Components/ContactUs/ContactUs";

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
        <div className="bg-[#FEECE2] py-10">
          <div className="xl:w-[80%] lg:w-[95%] md:w-[90%] w-[90%] mx-auto lg:flex mb-20">
            <div className="lg:w-1/2 xl:w-1/2">
              <p className="uppercase text-xl text-red-500">Why rythme</p>
              <p className="xl:text-7xl lg:text-5xl md:text-7xl text-5xl">
                Learn The Music From The Core & Become Mastery
              </p>
            </div>
            <div className="lg:w-1/2 xl:mt-0 lg:mt-0 md:mt-10 mt-10">
              <div className="flex w-full">
                <img
                  className="w-20"
                  src="https://i.ibb.co/HTnKFNk/Testimonials-1.png"
                  alt="ceo Intan Kejora"
                />

                <div className="items-center pt-3 pl-5">
                  <p className="text-xl">Intan Kejora</p>
                  <p className="text-base text-red-500">CEO RYTHME</p>
                </div>
              </div>
              <p className="text-lg pt-7">
                At Tempo Tutors, we offer more than just music lessons. Our
                school fosters a community of creativity, growth, and
                inspiration. With expert instructors, diverse classes, and a
                supportive environment, we're dedicated to nurturing your
                musical talents and helping you achieve your fullest potential.
                Join us and unleash your musical passion today!
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 w-[80%] mx-auto xl:gap-10 lg:gap-10 md:gap-10 ">
            <div className="border-t-3 border-black w-full mt-5">
              <div className="flex items-center text-2xl my-6">
                <FaCircle className="w-3 mr-3 text-red-500" />
                <p>User</p>
              </div>
              <p className="my-5 text-6xl">20 K</p>
              <p className="text-base">
                Explore our music classes today and discover your passion for
                music with us!
              </p>
            </div>
            <div className="border-t-3 border-black w-full mt-5">
              <div className="flex items-center text-2xl my-6">
                <FaCircle className="w-3 mr-3 text-red-500" />
                <p>Experience</p>
              </div>
              <p className="my-5 text-6xl">2004</p>
              <p className="text-base">
                Unlock your musical potential with our diverse classes. Join us
                today to discover your passion for music!
              </p>
            </div>
            <div className="border-t-3 border-black w-full mt-5">
              <div className="flex items-center text-2xl my-6">
                <FaCircle className="w-3 mr-3 text-red-500" />
                <p>Expert Teacher</p>
              </div>
              <p className="my-5 text-6xl">100+</p>
              <p className="text-base">
                Embark on a musical journey with our expert instructors. Join us
                today and discover your passion for music!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-[80%] lg:w-[80%] md:w-[90%]  mx-auto"><ContactUs/></div>
    </div>
  );
}
