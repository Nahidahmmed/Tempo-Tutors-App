import AboutUs from "../../Components/AboutUs/AboutUs";
import Instruments from "../../Components/Instruments/Instruments";
import PopularClasses from "../../Components/PopularClasses/PopularClasses";
import PopularInstructors from "../../Components/PopularInstructors/PopularInstructors";
import Slider from "../../Components/Slider/Slider";


export default function Home() {
  return (
    <div>
        <Slider/>
        <div className="max-w-screen-xl mx-auto">
        <AboutUs/>
        <PopularClasses/>
        <PopularInstructors/>
        <Instruments/>
        </div>
    </div>
  )
}
