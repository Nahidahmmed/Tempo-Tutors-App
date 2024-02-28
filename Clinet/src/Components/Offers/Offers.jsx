import { FaCheck } from "react-icons/fa";
import "./Offers.css";
import Title from "../../ReusedComponents/Title";
export default function Offers() {
  return (
    <div className="mb-[20%]">
        <Title title={"Grade Programs"} semititle={"for class"}/>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 mx-auto mt-20">
        <div className="card group mx-auto">
          <div className="content group-hover:text-white text-[#2C3333]">
            <p className="heading">
              $29.00 <span className="text-sm">/class</span>
            </p>
            <p>Preschool Classes</p>
            <p className="para">
              Our preschool classes provide a fun and educational environment
              for children ages 3-5. With engaging activities and experienced
              instructors, your child will develop important social and
              cognitive skills while having a blast!
            </p>
            <p>What's Included?</p>
            <ul>
              <li className="flex items-center gap-2">
                <FaCheck />
                10 sessions
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                Experienced instructors
              </li>
            </ul>
            <button className="btn">Read more</button>
          </div>
        </div>
        <div className="card group mx-auto">
          <div className="content group-hover:text-white text-[#2C3333]">
            <p className="heading">
              $39.00 <span className="text-sm">/class</span>
            </p>
            <p>Toddler Classes</p>
            <p className="para">
              Our toddler classes are designed for children ages 1-3 to explore
              and learn in a safe and supportive environment. With hands-on
              activities and interactive play, your little one will discover new
              skills and build confidence!
            </p>
            <p>What's Included?</p>
            <ul>
              <li className="flex items-center gap-2">
                <FaCheck />8 sessions
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                Interactive learning materials
              </li>
            </ul>
            <button className="btn">Read more</button>
          </div>
        </div>
        <div className="card group mx-auto">
          <div className="content group-hover:text-white text-[#2C3333]">
            <p className="heading">
              $49.00 <span className="text-sm">/class</span>
            </p>
            <p>Kindergarten Prep Classes</p>
            <p className="para">
              Our kindergarten prep classes are designed to help children ages
              4-6 develop the skills they need for a successful transition to
              kindergarten. With a focus on literacy, numeracy, and
              social-emotional development, your child will be well-prepared for
              school!
            </p>
            <p>What's Included?</p>
            <ul>
              <li className="flex items-center gap-2">
                <FaCheck />
                12 sessions
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                Small class for personalized attention
              </li>
            </ul>
            <button className="btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
