import { Link } from "react-router-dom"
import "./About.css"

export default function About() {
  return (
    <div className="lg:flex container w-full mx-auto bg-white">
       <div className="lg:w-[55%] lg:pr-9 mt-16 m-5">
      <h2 className="text-xl font-normal text-blue-500 italic">About the Music School</h2>
      <h2 className="text-5xl mt-4 font-medium text-gray-700 font-serif">Grow Your Skills For Free With Rythme Academy</h2>
      <p className="mt-6 text-base font-light ">
        Dramatically Morph Reliable Experiences Without Strategic Methodologies. Quickly Create Frictionless Strategic Theme Areas.
        Immerse Yourself In the World of Music. Explore New Sounds and Vibrations. Discover the Art of Harmonious Melodies.
        Join a Community of Music Enthusiasts. Experience the Power of Rhythm and Beats. Unleash Your Creative Potential Through Music.
        Embrace the Magic of Musical Expression Dramatically Morph Reliable Experiences Without Strategic Methodologies. Quickly Create Frictionless Strategic Theme Areas.
      </p>
      <button className=" UI-Button mt-5 ">LEARN MORE</button>
    </div>
      <div className="lg:w-[45%] mt-16">
        <div className="parent w-full">
          <div
            className="Card lg:w-[100%] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/rMq5vx7/portrait-young-cheerful-girl-listening-music-headphones-isolated-gradient-pink-background-blue-neon.jpg)",
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
