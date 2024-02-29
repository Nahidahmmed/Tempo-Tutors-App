import { FaMap } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-full text-white bg-[#040D16] rounded-md my-[10%]">
      <div className="lg:flex xl:flex md:flex">
        <div className="xl:w-1/2 lg:w-1/2 p-10 pt-10">
          <h1 className="text-xl text-blue-500">CONTACT US</h1>
          <p className="xl:text-6xl lg:text-6xl md:text-6xl text-5xl pt-4">Get Closer With Us</p>
          <p className="text-base pt-5">Feel free to reach out to us with any questions, inquiries, or feedback. We're here to assist you and provide the information you need. Your input is valuable to us, and we look forward to hearing from you!</p>
          <ul className="xl:text-lg lg:text-lg md:text-lg text-sm pt-8">
            <li className="flex items-center pb-2"><FaMap className="xl:mr-4 lg:mr-4 md:mr-4 mr-2 xl:text-lg lg:text-xl md:text-xl text-xl"/>2nd Ronggowarsito Street, pekanbaru, riau, 28290</li>
            <li className="flex items-center pb-2 "><FaRegEnvelopeOpen className="xl:mr-4 lg:mr-4 md:mr-4 mr-2 xl:text-lg lg:text-xl md:text-xl text-xl"/>nahidahmmed411@gmail.com</li>
            <li className="flex items-center"><FaPhone className="xl:mr-4 lg:mr-4 md:mr-4 mr-2 xl:text-lg lg:text-xl md:text-xl text-xl"/>(+088) 01533175945</li>
          </ul>
        </div>
        <div className="xl:w-1/2 lg:w-1/2">
          <form className="py-10 p-10">
            
            <div className="mb-4">
              <input
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Name"
                className="w-full px-4 p-4 text-sm border rounded-md bg-transparent"
              />
            </div>
            <div className="mb-4 flex gap-5">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 p-4 text-sm border rounded-md bg-transparent"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="w-full px-4 p-4 text-sm border rounded-md bg-transparent"
              />
            </div>
            <div className="mb-4">
              
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 p-4 text-sm border rounded-md bg-transparent"
              />
            </div>
            <div className="mb-4">
             
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full px-4 p-4 text-sm border rounded-md bg-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 p-2 text-sm rounded-md hover:bg-blue-600 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
