import { useState, useEffect } from "react";
import image1 from "../../assets/music class image/image1.jpg";
import image2 from "../../assets/music class image/image2.jpg";
import image3 from "../../assets/music class image/image3.jpg";
import image4 from "../../assets/music class image/image4.jpg";
import "./Slider.css";
export default function Slider() {
  const [timeRunning] = useState(500);
  const [timeAutoNext] = useState(5000);

  let runTimeOut;
  let runNextAuto;

  const showSlider = (type) => {
    const carouselDom = document.querySelector(".carousel");
    const SliderDom = document.querySelector(".carousel .list");
    const thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    const SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
    const thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);
  return (
    <div className="carousel w-[100%] md:w-full lg:w-full mb-[15%]">
      <div className="list">
        <div className="item">
          <img src={image1} alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%]">
            <div className="author">MusicMentor</div>
            <div className="title">Music Mastery Class</div>
            <div className="topic">Instrumental</div>
            <div className="des">
              Unleash your musical potential with our comprehensive voice music
              class. Dive into vocal technique, harmony theory, and captivating
              performance. Whether you're a beginner or seasoned vocalist, join
              us today and discover the joy of singing with confidence and
              expression!
            </div>
           
          </div>
        </div>
        <div className="item">
          <img src={image2} alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%]">
            <div className="author">RhythmRocks</div>
            <div className="title">Guitar Sessions</div>
            <div className="topic">Rhythm</div>
            <div className="des">
              Ignite your passion for music with our dynamic guitar mastery
              class. Delve into fretboard techniques, music theory, and
              captivating performance. Whether you're strumming chords or
              shredding solos, join us today and unlock the full potential of
              your guitar playing!
            </div>
           
          </div>
        </div>
        <div className="item">
          <img src={image3} alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%]">
            <div className="author">HarmonyHarbor</div>
            <div className="title"> Workshop</div>
            <div className="topic">Electric Guitar</div>
            <div className="des">
              Elevate your musical journey with our electrifying electric guitar
              class. Explore advanced techniques, effects, and dynamic
              performance. Whether you're a rocker or a blues aficionado, join
              us today and unleash the power of electric guitar expression!
            </div>
           
          </div>
        </div>
        <div className="item">
          <img src={image4} alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%]">
            <div className="author">StringsStudio</div>
            <div className="title">Violin Masterclass</div>
            <div className="topic">Strings</div>
            <div className="des">
              Ignite your musical journey with our enchanting violin mastery
              class. Explore classical techniques, musical theory, and emotive
              performance. Whether you're a beginner or seasoned player, join us
              today and discover the timeless beauty of the violin!
            </div>
           
          </div>
        </div>
      </div>

      <div className="thumbnail left-[40%] lg:left-[40%]">
        <div className="item">
          <img src={image1} alt="" />
          <div className="content">
            <div className="title">Music Mastery</div>
            
          </div>
        </div>
        <div className="item">
          <img src={image2} alt="" />
          <div className="content">
            <div className="title">Guitar Sessions</div>
            
          </div>
        </div>
        <div className="item">
          <img src={image3} alt="" />
          <div className="content">
            <div className="title">Workshop</div>
            
          </div>
        </div>
        <div className="item">
          <img src={image4} alt="" />
          <div className="content">
            <div className="title">Violin Masterclass</div>
            
          </div>
        </div>
      </div>

      <div className="arrows ml-[6%] lg:ml-[10%]">
        <button
          className="icon w-14 h-14"
          onClick={() => showSlider("prev")}
          id="prev"
        >
          {"<"}
        </button>
        <button
          className="icon w-14 h-14"
          onClick={() => showSlider("next")}
          id="next"
        >
          {">"}
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
}
