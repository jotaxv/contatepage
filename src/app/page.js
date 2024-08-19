import Image from "next/image";
import style from "./page.css";
import Input from "postcss/lib/input";
import breakpoints from "./breakpoints";

export default function Home() {
  return (
    <main id="tantoFaz" className="m-0 flex items-center justify-center bg-green-200 p-[10px] ">
      <div className="bg-white flex justify-center w-[390px] p-[15px] rounded-[12px] flex-col lg:w-[690px]">
        <h1 className="font-[600] text-[35px] mb-[20px]">Contact Us</h1>
        <div className="flex flex-col sm:flex-row sm:gap-4">
    <main className="m-0 p-0 flex items-center justify-center bg-green-100 h-[100%]">
      <div className="bg-white flex justify-center w-[580px] p-[30px] rounded-[10px] flex-col">
        <h1 className="font-[600] text-[22px] mb-[20px]">Contact Us</h1>
        <div className="flex flex-row gap-5 m-[12px]">
          <div>
            <p className="pb-[10px] pt-[10px] text-[17px] ">First Name *</p>
            <input
            className="bg-gray-100 border border-gray-400 rounded-[8px] h-[60px] w-[100%] px-[16px] lg:h-[50px] lg:w-[320px]"
              type="text"
            ></input>
          </div>
          <div>
            <p className=" pb-[10px] pt-[10px] text-[17px] ">Last Name *</p>
            <input
              className="bg-gray-100 border border-gray-400 rounded-[8px] h-[60px] w-[100%] px-[16px]  lg:h-[50px] lg:w-[320px]"
              type="text"
            ></input>
          </div>
        </div>
        <div className="grid">
          <p className=" pb-[10px] pt-[10px] text-[17px] ">Email Address *</p>
          <input
            className="bg-gray-100 border border-gray-400 rounded-[8px] h-[60px] w-[100%] lg:h-[50px] lg:w-[100%]" 
            type="email"
          ></input>
        </div>
    </main>
        <div>
          <p className=" pb-[10px] pt-[10px] text-[17px] ">Query Type *</p>
          <div className="flex flex-col gap-3">
            <div className="bg-gray-100 border border-gray-400 rounded-[8px] h-[60px] flex items-center w-[100%] lg:h-[50px] lg:w-[100%]">
              <input className="m-5" type="radio" name="base" />
              <p>General Enquiry</p>
            </div>
            <div className="bg-gray-100 border border-gray-400 rounded-[8px] h-[60px] flex items-center w-[100%]  lg:h-[50px] lg:w-[100%]">
              <input className="m-5" type="radio" name="base" />
              <p>Support Request</p>
            </div>
          </div>
        </div>

        <div>
          <p className=" pb-[10px] pt-[10px] text-[17px] ">Message *</p>
          <textarea className="bg-gray-100 border border-gray-400 resize-none rounded-[8px] h-[200px] w-[100%] p-1 pl-2  lg:h-[100px] lg:w-[100%]"></textarea>
        </div>

        <div className="flex gap-4 items-center m-[12px]">
          <input className="bg-gray-100 border border-gray-400 rounded-[8px] h-[30px]" type="checkbox" />
          I consent to being contacted by the team *
        </div>
          <button className="bg-[rgba(12,125,105,255)] rounded-[8px] h-[40px] m-[12px] text-white hover:bg-[rgba(10,100,90,250)] duration-[0.3s] hover:scale-[1.03]">Submit</button>
      </div>
    </main>
  );
}
