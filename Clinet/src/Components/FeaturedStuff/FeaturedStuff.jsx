import { FaInstagram,FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Title from "../../ReusedComponents/Title";

export default function FeaturedStuff() {
  return (
    <div className="my-[20%]">
      <Title title={"Featured Instructors"} semititle={"Staff"}></Title>
      <div className="grid lg:grid-cols-3 w-[85%] gap-8 mx-auto mt-16">
        {teachers.map((teacher) => (
          <div key={teacher.index} className="text-center">
            <div className="w-[80%] mx-auto overflow-hidden rounded-full">
              <img
                className="rounded-full transition-transform duration-300 hover:scale-110"
                src={teacher.image}
                alt={teacher.name}
              />
            </div>
            <h1 className="font-serif text-4xl mt-7">{teacher.name}</h1>
            <p className="text-base font-light">{teacher.position}</p>
            <div className="flex gap-5 text-xl mx-[30%] mt-10 text-[#38adaf]">
              <button
                className="p-2 rounded-full text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
              >
                <FaInstagram />
              </button>
              <button
                className="p-2 rounded-full text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
              >
                <FaFacebookF />
              </button>
              <button
                className="p-2 rounded-full text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const teachers = [
  {
    image:
      "https://i.ibb.co/4g4HQjC/senior-professor-with-raised-hand-holding-pen-classroom.jpg",
    name: "Tim Caroll",
    position: "Professional Cellist",
  },
  {
    image:
      "https://i.ibb.co/2kWPPsZ/portrait-confident-young-blonde-businesswoman-sitting-chair-workplace.jpg",
    name: "Amanda Snow",
    position: "Professional Pianist",
  },
  {
    image:
      "https://i.ibb.co/6tYr6Jp/portrait-smiling-young-businesswoman-holding-eyeglasses-hand-looking-camera.jpg",
    name: "Terry Barton",
    position: "Professional Violinist",
  },
];
