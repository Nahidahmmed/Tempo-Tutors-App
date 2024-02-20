import { useEffect, useState } from "react";

import BannerImage from "../../assets/music class image/image5.jpg";
import InstructorCard from "../../ReusedComponents/InsTructorCard/InsTructorCard";
import Banner from "../../ReusedComponents/Banner/Banner";


const AllInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BASE_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => {setInstructors(data) ,setLoading(false)});
    
  }, []);

  if (loading) {
    return (
      <div class="loader mx-auto py-[30%]">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
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
        route={"Instructors"}
      ></Banner>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 pt-24 max-w-screen-xl mx-auto">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;
