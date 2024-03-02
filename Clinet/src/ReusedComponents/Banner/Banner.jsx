import { Link } from "react-router-dom";

export default function Banner({image,tittle,text,route}) {
  return (
    <div className="relative">
        <img className="w-full h-[480px] object-cover" src={image} />
        <div className="absolute text-center top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 p-4">
          <Link
            to="/"
            className="absolute top-24 left-4 bg-black bg-opacity-30 text-white px-4 py-2 rounded-full"
          >
            Home {" > "}
            <span className="text-gray-400">{route}</span>
          </Link>

          <h1 className="text-4xl xl:text-5xl lg:text-5xl md:text-5xl mt-24 mb-2 xl:w-[80%] lg:w-[80%] md:w-[80%] w-full">
            {tittle}
          </h1>
          <p className="text-base sm:text-lg xl:w-[50%] lg:w-[50%] md:w-[50%]">
          {text}
          </p>
        </div>
      </div>
  )
}
