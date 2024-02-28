import { FaArrowUp, FaClock, FaMap } from "react-icons/fa";

export default function Events() {
  return (
    <div>
      <div className="mx-5">
        {Eventinfos.map((event, index) => (
          <div
            key={index}
            className="w-full grid lg:grid-cols-6 text-white bg-[#272829] my-5 py-3 rounded-md  p-5 xl:p-0 lg:p-0 md:p-0 "
          >
            <div className="lg:col-span-1">
              <p className="text-6xl p-5 mt-3">{event.date}</p>
            </div>
            <div className="lg:col-span-4 my-auto">
              <div className="text-base">
                <p className="text-3xl pt-2">{event.title}</p>
                <div className="flex py-2 text-xl mr-10">
                  <div className="flex mr-auto">
                    <FaClock className="items-center mt-[3px] mr-2" />
                    <p>{event.time}</p>
                  </div>
                  <div className="flex ">
                    <FaMap className="items-center mt-[3px] mr-2"/>
                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
              <p className="text-base py-3">{event.description}</p>
            </div>
            <div className="lg:col-span-1">
            <FaArrowUp className="rotate-45 xl:text-8xl lg:text-8xl md:text-8xl text-9xl xl:ml-auto lg:ml-auto md:ml-auto mx-auto mt-10"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Eventinfos = [
  {
    title: "Spring Concert Showcase",
    date: "15 Aug",
    time: "7:00 PM",
    location: "Main Auditorium",
    description:
      "Join us for an evening of musical talent featuring our students from all levels. From classical to contemporary, our performers will showcase their skills and passion for music. Don't miss this opportunity to support our young musicians!",
  },
  {
    title: "Guitar Masterclass with John Smith",
    date: "10 Mar",
    time: "10:00 AM",
    location: "Music Room 1",
    description:
      "Renowned guitarist John Smith will lead an exclusive masterclass for intermediate and advanced guitarists. Learn advanced techniques, improvisation skills, and gain insights into performance dynamics. Limited spots available, reserve yours now!",
  },
  {
    title: "Piano Recital: Emerging Talents",
    date: "20 May",
    time: "2:00 PM",
    location: "Recital Hall",
    description:
      "Experience the next generation of piano virtuosos in our Emerging Talents recital. Students will perform solo pieces, duets, and ensemble works, showcasing their progress and dedication to their craft. Join us for an inspiring afternoon of music!",
  },
];
