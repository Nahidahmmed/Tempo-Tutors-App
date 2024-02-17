import { useEffect, useState } from "react";
import InstructorCard from "../../ReusedComponents/InsTructorCard/InsTructorCard";
import Title from "../../ReusedComponents/Title";


const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  
  useEffect(() => {
    
    fetch(`${import.meta.env.VITE_BASE_URL}/PopularInstructor`)
      .then((res) => res.json())
      .then((data) => {setInstructors(data)});
  }, []);

 
  return (
    <div className="my-[20%]">
      <Title title={"Featured Teachers"} semititle={"Staffs"}></Title>
      <div className="grid md:grid-cols-3 gap-10 my-20">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
