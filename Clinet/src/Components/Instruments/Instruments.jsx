

export default function Instruments() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-full py-16 ">
        {
            musicalInstruments.map(instrument => (
                <div className="text-center w-48 mx-auto lg:mt-0 mt-10" key={instrument.index}>
                    <img className="w-20 mx-auto mb-5" src={instrument.image} alt={instrument.title} />
                    <h1 className="text-lg">{instrument.title}</h1>
                    <p className="text-sm">{instrument.text}</p>
                </div>
            ))
        }
    </div>
  )
}

const musicalInstruments = [
    {
        image: "https://i.ibb.co/RvpSHJQ/piano.png",
        title: "Piano",
        text: "It is a musical instrument played using a keyboard."
    },
    {
        image: "https://i.ibb.co/D7FgM1r/guitar.png",
        title: "Guitar",
        text: "The guitar is classified as a string instrument."
    },
    {
        image: "https://i.ibb.co/TrX74B3/mike.png",
        title: "Voice",
        text: "It is a type of music performed by our singers."
    },
    {
        image: "https://i.ibb.co/hYwvqx6/drum-set.png",
        title: "Drums",
        text: "Can play by striking with the hand or two sticks."
    },
    {
        image: "https://i.ibb.co/xggLVQz/violin.png",
        title: "Violin",
        text: "The violin has four strings tuned in perfect fifths."
    },
    {
        image: "https://i.ibb.co/RPhg5vv/cello.png",
        title: "Cello",
        text: "The cello is used as a solo musical instrument."
    },
    {
        image: "https://i.ibb.co/ZL6CJZz/double-bass.png",
        title: "Double Bass",
        text: "The lowest-pitched bowed string instrument."
    },
    {
        image: "https://i.ibb.co/2cL0DTm/saxophone.png",
        title: "Saxophone",
        text: "The saxophone is a woodwind instrument."
    },
]