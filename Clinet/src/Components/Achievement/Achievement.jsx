import { Parallax } from "react-parallax";
import image from "../../assets/music class image/kelly-sikkema-jrFNMM6K0VI-unsplash.jpg";


export default function Achievement() {
  return (
    <div>
      <div className="my-[20%]">
        <Parallax blur={{ min: -25, max: 25 }} bgImage={image} strength={-200}>
          <div className="text-white text-center mt-20">
            <h1 className="font-serif text-6xl">Melody Music School</h1>
            <p className="text-lg mt-6 lg:w-[30%] mx-auto">
              We have talented and very experienced instructors who teach piano,
              violin, guitar, cello, and other instruments.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 pt-16">
              {infos.map((info) => (
                <div key={info.index} className="mx-auto">
                  <div className="border-white border-2 rounded-full p-3">
                    <p className="bg-white bg-opacity-25 text-white text-4xl lg:text-7xl md:text-7xl lg:w-[180px] lg:h-[180px] md:w-[180px] md:h-[180px] w-[90px] h-[90px]  rounded-full lg:pt-14 md:pt-14 pt-6">
                      {info.number}
                    </p>
                  </div>
                  <p className="lg:text-3xl md:text-3xl text-lg md:pt-7 lg:pt-7 pt-4 pb-5">{info.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: "80px" }} />
        </Parallax>
        <div className="bg-[]">

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
    title: "Programmes",
    number: "32",
  },
  {
    title: "Awards",
    number: "21",
  },
];
