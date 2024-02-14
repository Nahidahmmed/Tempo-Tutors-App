import { Parallax } from "react-parallax";
import image from '../../assets/music class image/kelly-sikkema-jrFNMM6K0VI-unsplash.jpg';

export default function Achievement() {
  return (
    <div>
        <div className="my-[20%]">
      <Parallax
        blur={{ min: -25, max: 25 }}
        bgImage={image}
        
        strength={-200}
      >
        <div className="text-white text-center mt-32">
            <h1 className="font-serif text-6xl">Melody Music School</h1>
            <p className="text-lg mt-6 lg:w-[30%] mx-auto">We have talented and very experienced instructors who teach piano, violin, guitar, cello, and other instruments.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                {infos.map(info =>(
                    <div key={info.index} className="mx-auto">
                        <div className="">
                            <p className="bg-white bg-opacity-25 text-white p-8 text-7xl w-24">{info.number}</p>
                        </div>
                        <p>{info.title}</p>
                    </div>
                ))}
            </div>
        </div>
        <div style={{ height: "140px" }} />
      </Parallax>
    </div>
    </div>
  )
}

const infos = [
    {
        title: "Students",
        number: "231"
    },
    {
        title: "Teachers",
        number: "14"
    },
    {
        title: "Programmes",
        number: "32"
    },
    {
        title: "Awards",
        number: "21"
    }
]