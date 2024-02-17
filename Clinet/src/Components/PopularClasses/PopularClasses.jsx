import { useEffect, useState } from "react";
import Title from "../../ReusedComponents/Title";
import ClassCard from "../../ReusedComponents/ClassCard/ClassCard";


export default function PopularClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BASE_URL}/PopularClasses`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data), setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader mx-auto py-[35%]">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  }

  return (
    <div className="">
      <Title title={"Pouuler Classes"} semititle={"Class"}></Title>
      <div className="mt-20">
        <div className="grid md:grid-cols-3 gap-10">
          {classes.map((item) => (
            <ClassCard key={item._id} item={item}></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
