export default function Title({ title, semititle }) {
    return (
      <div className="w-full text-center">
        <p className="text-5xl font-serif text-black">{title}</p>
        <p className="text-xs italic pt-3 font-serif">{semititle}</p>
      </div>
    );
  }
  