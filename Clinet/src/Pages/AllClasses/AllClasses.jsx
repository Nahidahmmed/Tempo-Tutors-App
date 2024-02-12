import { useEffect, useState } from "react";

import "./AllClasses.css";
import Class_Image from "../../assets/music class image/image6.jpg";

import ClassCard from "../../ReusedComponents/ClassCard/ClassCard";
import Banner from '../../ReusedComponents/Banner/Banner';
const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BASE_URL}/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
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
    <div className="">
      <Banner image={Class_Image} tittle={banner.title} text={banner.text} route={banner.route}></Banner>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 pt-24 max-w-screen-xl mx-auto">
        {classes.map((item) => (
          <ClassCard item={item} key={item._id}></ClassCard>
        ))}
      </div>
    </div>
      
  );
};

export default AllClasses;
const banner = {
  route: "All Classes",
  title: " Explore a plethora of Music Classes.",
  text: `Discover diverse music classes tailored to your interests and skill
  level. Whether you are a beginner or an experienced musician, explore
  guitar, piano, vocal, and more. Start your musical journey today!`
}