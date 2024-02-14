import Title from "../../ReusedComponents/Title/Title";

export default function News() {
  return (
    <div className="mt-36">
        <Title title={"Latest News"} semititle={"Blog"}></Title>
      <div className="grid lg:grid-cols-3 lg:gap-20 md:gap-15 my-16">
        {latetNews.map((info) => (
          <div key={info.index} className="mx-auto mt-10 lg:mt-0 md:mt-0">
            <img className="rounded-md" src={info.image} alt={info.title} />
            <p className="text-sm font-sans mt-2">{info.date}</p>
            <h1 className="text-2xl font-sans mt-3">{info.title}</h1>
            <p className="font-light mt-2">{info.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const latetNews = [
  {
    image: "https://i.ibb.co/W3XPS5x/woman-playing-piano-music-studio.jpg",
    title: "International Piano Festival",
    text: "The International Piano Festival celebrates piano globally with performances, masterclasses, workshops, competitions, fostering cultural exchange through music.",
    date: "feb 5, 2024",
  },
  {
    image:
      "https://i.ibb.co/0V53qQC/male-musician-playing-acoustic-guitar-dark-room-copy-space.jpg",
    title: "Columbia Kids Week",
    text: "Columbia Kids Week is an annual event offering fun activities, workshops, and games for children to enjoy in a vibrant atmosphere.",
    date: "feb 6, 2024",
  },
  {
    image: "https://i.ibb.co/yWQczWJ/man-plays-saxophone.jpg",
    title: "Festival of Flutes",
    text: "The Festival of Flutes celebrates flute music with performances, workshops, and collaborations, uniting flutists worldwide in a harmonious celebration.",
    date: "feb 12, 2024",
  },
];
