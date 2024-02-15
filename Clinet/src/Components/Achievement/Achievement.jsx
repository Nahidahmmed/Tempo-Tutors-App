import { Parallax } from "react-parallax";
import image from "../../assets/music class image/kelly-sikkema-jrFNMM6K0VI-unsplash.jpg";


export default function Achievement() {
  return (
    <div>
      <div className="my-[15%]">
        <Parallax blur={{ min: -25, max: 25 }} bgImage={image} strength={-200}>
          <div className="text-white text-center mt-20">
            <h1 className="font-serif text-6xl">Tempo Tutors Music School</h1>
            <p className="text-lg mt-6 lg:w-[30%] mx-auto">
              We have talented and very experienced instructors who teach piano,
              violin, guitar, cello, and other instruments.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 pt-16 lg: w-[80%] mx-auto">
              {infos.map((info) => (
                <div key={info.index} className="mx-auto">
                  <div className="border-white border-2 rounded-full p-3 mx-auto">
                    <p className="bg-white bg-opacity-25 text-white text-4xl lg:text-7xl md:text-7xl lg:w-[140px] lg:h-[140px] md:w-[140px] md:h-[140px] w-[90px] h-[90px] rounded-full lg:pt-9 md:pt-9 pt-6 mx-auto tracking-wider">
                      {info.number}
                    </p>
                  </div>
                  <p className="lg:text-3xl md:text-3xl text-lg md:pt-7 lg:pt-7 pt-4 pb-5">{info.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: "60px" }} />
        </Parallax>
        <div className="bg-[#000000]">

        </div>
      </div>
    </div>
  );
}

const infos = [
  {
    title: "Students",
    number: "231",
  },
  {
    title: "Teachers",
    number: "14",
  },
  {
    title: "Events",
    number: "27",
  },
  {
    title: "Awards",
    number: "21",
  },
];
