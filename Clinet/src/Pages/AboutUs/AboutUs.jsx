import image from "../../assets/about.jpg";
import About from "../../Components/AboutUs/About";
import Banner from "../../ReusedComponents/Banner/Banner";

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
      <div className="my-[10%]">
        <About />
      </div>
      {/* ceo section */}
      <div className="w-[80%] mx-auto lg:flex mb-10">
        <div className="w-1/2">
          <p className="uppercase text-xl text-red-500">Why rythme</p>
          <p className="text-7xl">Learn The Music From The Core & Become Mastery</p>
        </div>
        <div className="w-1/2">
        <div className="flex pt-5">
            <img className="w-20" src="https://i.ibb.co/HTnKFNk/Testimonials-1.png" alt="ceo Intan Kejora" />
    
            <div className="items-center pl-5">
              <p className="text-xl">Intan Kejora</p>
              <p className="text-base">CEO RYTHME</p>
            </div>
          </div>
          <p className="text-lg pt-7">At Tempo Tutors, we offer more than just music lessons. Our school fosters a community of creativity, growth, and inspiration. With expert instructors, diverse classes, and a supportive environment, we're dedicated to nurturing your musical talents and helping you achieve your fullest potential. Join us and unleash your musical passion today!</p>
        </div>
      </div>
    </div>
  );
}
