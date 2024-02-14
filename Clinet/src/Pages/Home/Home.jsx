import AboutUs from "../../Components/AboutUs/AboutUs";
import Achievement from "../../Components/Achievement/Achievement";
import Instruments from "../../Components/Instruments/Instruments";
import MakeArts from "../../Components/MakeArts/MakeArts";
import MusicGroups from "../../Components/MusicGroups/MusicGroups";
import News from "../../Components/News/News";
import PopularClasses from "../../Components/PopularClasses/PopularClasses";
import PopularInstructors from "../../Components/PopularInstructors/PopularInstructors";
import Reviews from "../../Components/Reviews/Reviews";
import Slider from "../../Components/Slider/Slider";


export default function Home() {
  return (
    <div>
        <Slider/>
        <div className="max-w-screen-xl mx-auto">
        <AboutUs/>
        <MusicGroups/>
        </div>
        <MakeArts></MakeArts>
        <div className="max-w-screen-xl mx-auto">
        <Instruments/>
        </div>
        <div className="max-w-screen-xl mx-auto">
        <PopularClasses/>
        </div>
        <Achievement/>
        <div className="max-w-screen-xl mx-auto">
        <PopularInstructors/>
        <News/>
        </div>
        <Reviews/>
    </div>
  )
}
