import { useEffect, useState } from "react";
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
      <div class="loader mx-auto py-[35%]">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    );
  }

  return (
    <div className="lg:ml-[4%]">
      <h1 className="font-bold text-5xl my-12">Popular Classes</h1>
      <div className="grid md:grid-cols-3">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
}
