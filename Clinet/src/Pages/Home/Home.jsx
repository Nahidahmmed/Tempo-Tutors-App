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
import Offers from '../../Components/Offers/Offers'

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="max-w-screen-xl mx-auto">
        <AboutUs />
        <MusicGroups />
      </div>
      <MakeArts></MakeArts>
      <div className="max-w-screen-xl mx-auto">
        <Instruments />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <PopularClasses />
      </div>
      <Achievement />
      <div className="max-w-screen-xl mx-auto">
        <PopularInstructors />
        <News />
      </div>
      <Reviews />
      <div className="max-w-screen-xl mx-auto">
        <FeaturedStuff />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Offers/>
      </div>
    </div>
  )
}
