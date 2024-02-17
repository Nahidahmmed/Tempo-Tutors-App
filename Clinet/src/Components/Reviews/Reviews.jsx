import { Parallax } from "react-parallax";
import image from "../../assets/music class image/music_image.jpg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
export default function Reviews() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {s
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="my-[15%]">
      <Parallax blur={{ min: -25, max: 25 }} bgImage={image} strength={-200}>
        <div className="text-white text-center mt-5">
          <div className="pt-16 lg:w-[80%] mx-auto">
            {/* slider star */}
            <div ref={sliderRef} className="keen-slider">
        {reviews.map((review, index) => (
          <div key={index} className="keen-slider__slide pb-7">
            <div>
              <img src={review.image} alt={review.name} className="review-image lg:w-[10%] md:w-[10%] w-[80%] rounded-full mx-auto" />
              <div className="review-details">
                <h2 className="review-name text-4xl pt-3">{review.name}</h2>
                <p className="review-text text-lg lg:w-[70%] mx-auto pt-3">"{review.review}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
            {/* slider end */}
          </div>
        </div>
        <div style={{ height: "20px" }} />
      </Parallax>
    </div>
  );
}

const reviews = [
  {
    name: "Michael Johnson",
    review:
      "I've been learning guitar at Melody Music School for a few months now, and I'm incredibly impressed with the instructors. They make learning fun and engaging, and I've made significant progress since I started.",
    image: "https://i.ibb.co/MPQ1K14/portrait-man-laughing.jpg",
  },
  {
    name: "Emily Williams",
    review:
      "The piano lessons at Melody Music School are fantastic! The instructors are patient and knowledgeable, and they tailor the lessons to suit my learning style. I highly recommend this school to anyone interested in learning music.",
    image: "https://i.ibb.co/bRYNv7L/blogger-showing-her-spanish-guitar-camera.jpg",
  },
  {
    name: "David Garcia",
    review:
      "I enrolled my child in violin classes at Melody Music School, and I couldn't be happier with the results. The instructors are wonderful with kids, and they provide a supportive learning environment. My child has improved so much since joining!",
    image: "https://i.ibb.co/znLjf1r/modern-african-american-man-wearing-round-glasses.jpg",
  },
  {
    name: "Sophia Martinez",
    review:
      "As a complete beginner in music, I was nervous about starting guitar lessons. However, the instructors at Melody Music School put me at ease right away. They break down complex concepts into manageable chunks, making learning guitar a breeze.",
    image: "https://i.ibb.co/mt3VnzH/pretty-smiling-woman-cafe.jpg",
  },
  {
    name: "Alex Grimuar",
    review:
      "I was nervous about starting guitar lessons. However, the instructors at Melody Music School put me at ease right away. They break down complex concepts into manageable chunks, making learning guitar a breeze.",
    image: "https://i.ibb.co/kyhzPhj/happy-boy-is-playing-acoustic-guitar-isolated.jpg",
  },
];
