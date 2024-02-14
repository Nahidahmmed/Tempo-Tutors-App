import Title from "../../ReusedComponents/Title/Title"


export default function MusicGroups() {
  return (
    <>
    <Title title={"Music Groups"} semititle={"for"}></Title>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-32">
      {
        Groups.map(Group => (
          <div key={Group.index} className="text-center mt-16">
            <img className="w-[50%] rounded-full mx-auto" src={Group.image} alt={Group.title} />
            <h1 className="text-3xl mt-5 font-medium font-serif">{Group.title}</h1>
            <p className="text-sm mt-3 font-light mx-5">{Group.text}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

const Groups = [
    {
        image: "https://i.ibb.co/9pKkfK1/2151163728.jpg",
        title: "Kids",
        text: "Our school is a solution for families who would like to expose their children to the world of music."
    },
    {
        image: "https://i.ibb.co/pj9d4wL/father-lesson-play-guitar.jpg",
        title: "Teens",
        text: "Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music."
    },
    {
        image: "https://i.ibb.co/gmhydqT/low-angle-woman-with-headphones.jpg",
        title: "Adults",
        text: "We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors."
    },
    {
        image: "https://i.ibb.co/KwvXhPc/tutor-boy-learning-accoustic-guitar-ukulele.jpg",
        title: "Private lessons",
        text: "Private music lessons provide one-on-one attention, so teachers can focus on an individual student’s needs."
    },
]