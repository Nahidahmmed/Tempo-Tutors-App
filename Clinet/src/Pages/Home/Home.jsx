import AboutUs from "../../Components/AboutUs/AboutUs";
import PopularClasses from "../../Components/PopularClasses/PopularClasses";
import PopularInstructors from "../../Components/PopularInstructors/PopularInstructors";
import Slider from "../../Components/Slider/Slider";


export default function Home() {
  return (
    <div>
        <Slider/>
        <AboutUs/>
        <PopularClasses/>
        <PopularInstructors/>
    </div>
  )
}
