import { useEffect, useState } from "react";
import Banner from "../../ReusedComponents/Banner/Banner";
import BannerImage from "../../assets/music class image/image5.jpg";
import InstructorCard from "../../ReusedComponents/InstructorCard/InstructorCard";

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BASE_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
    setLoading(false);
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
    <div className="w-full">
      <Banner
        tittle={"Meet Our Expert Instructors, Masters in Their Craft"}
        text={
          "Welcome to our instructor showcase, where expertise meets passion. Get to know the brilliant minds behind our courses, each a master in their field. "
        }
        image={BannerImage}
      ></Banner>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 pt-24 max-w-screen-xl mx-auto">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
