import { Link } from "react-router-dom"
import "./AboutUs.css"

export default function AboutUs() {
  return (
    <div className="lg:flex container w-full mx-auto bg-white mt-48">
       <div className="lg:w-[55%] px-14">
      <h2 className="text-xl font-bold text-blue-500">About the Music School</h2>
      <h2 className="text-4xl mt-4 font-bold text-gray-700">Providing Service Since 2008</h2>
      <p className="mt-6 text-base text-justify">
        Dramatically Morph Reliable Experiences Without Strategic Methodologies. Quickly Create Frictionless Strategic Theme Areas.
        Immerse Yourself In the World of Music. Explore New Sounds and Vibrations. Discover the Art of Harmonious Melodies.
        Join a Community of Music Enthusiasts. Experience the Power of Rhythm and Beats. Unleash Your Creative Potential Through Music.
        Embrace the Magic of Musical Expression Dramatically Morph Reliable Experiences Without Strategic Methodologies. Quickly Create Frictionless Strategic Theme Areas.
      </p>
      <button className=" bg-red-600 mt-5 border-none text-white">LEARN MORE</button>
    </div>
      <div className="lg:w-[45%] mr-14 mt-12">
        <div className="parent w-full">
          <div
            className="Card lg:w-[100%] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/94Zzx9K/image2.jpg)",
            }}
          >
            <div className="content-box">
              <span className="Card-title">About Us</span>
              <p className="Card-content">
                You can learn more about our music class in melody master.
              </p>
              <Link className="see-more rounded-lg w-28">See More</Link>
            </div>
            <div className="date-box">
              <span className="month">JUNE</span>
              <span className="date">29</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
