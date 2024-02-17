import Instructor from '../../Components/Instructor'
import Slider from '../../Components/Slider/Slider'
import AboutUs from '../../Components/AboutUs/AboutUs'
import MusicGroups from '../../Components/MusicGroups/MusicGroups'
import MakeArts from '../../Components/MakeArts/MakeArts'
import Achievement from '../../Components/Achievement/Achievement'
import News from '../../Components/News/News'
import Reviews from '../../Components/Reviews/Reviews'
import FeaturedStuff from '../../Components/FeaturedStuff/FeaturedStuff'
import Instruments from '../../Components/Instruments/Instruments'
import PopularClasses from '../../Components/PopularClasses/PopularClasses'
import PopularInstructors from '../../Components/PopularInstructors/PopularInstructors'

export default function Home() {
  return (
    <div>
     <Slider></Slider>
     <AboutUs/>
     <MusicGroups/>
     <MakeArts/>
     <PopularClasses/>
     <PopularInstructors/>
     <Achievement/>
     <Instruments/>
      <News/>
      <Reviews/>
      <FeaturedStuff/>
    </div>
  )
}
