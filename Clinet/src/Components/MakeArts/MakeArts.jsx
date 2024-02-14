import { Parallax } from "react-parallax";
import image from '../../assets/music class image/abstract-watercolor-guitar-exploding-with-colorful-motion-generated-by-ai.jpg';
import "./MakeArts.css"

export default function MakeArts() {
  return (
    <div className="my-[5%]">
      <Parallax
        blur={{ min: -25, max: 25 }}
        bgImage={image}
        
        strength={-200}
      >
        <div className="text-black text-center mt-32">
            <h1 className="font-serif text-6xl">Let's make art!</h1>
            <p className="text-lg mt-6 lg:w-[30%] md:w-[80%] mx-auto">Explore several art forms as your child builds creativity and confidence in our new visual arts classes for ages 2-5!</p>
            <button class="button mt-5 rounded-full">SEE YOUR MUSIC CLASSES</button>
        </div>
        <div style={{ height: "140px" }} />
      </Parallax>
    </div>
  );
}
