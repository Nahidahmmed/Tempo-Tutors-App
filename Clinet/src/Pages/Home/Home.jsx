import AboutUs from "../../Components/AboutUs/AboutUs";
import Achievement from "../../Components/Achievement/Achievement";
import Instruments from "../../Components/Instruments/Instruments";
import MakeArts from "../../Components/MakeArts/MakeArts";
import MusicGroups from "../../Components/MusicGroups/MusicGroups";
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
        <MusicGroups/>
        </div>
        <MakeArts></MakeArts>
        <Achievement/>
    </div>
  )
}
