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
      <div className="pt-[25%] pb-[20%]">
        <div className="Container mx-auto">
          <div className="plate pl-3">
            <div className="black">
              <div className="border">
                <div className="white">
                  <div className="center"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="player">
            <div className="rect"></div>
            <div className="circ"></div>
          </div>
        </div>
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
