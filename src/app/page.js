import Image from "next/image";
import style from "./page.css";
import Input from "postcss/lib/input";

export default function Home() {
  return (
    <main className="m-0 p-0 flex items-center justify-center bg-green-100 h-[100vh]">
      <div className="bg-white flex justify-center w-[600px] p-[30px] rounded-[10px] flex-col">
        <h1 className="font-[600] text-[22px] mb-[20px]">Contact Us</h1>
        <div className="flex flex-row gap-5 m-[12px]">
          <div>
            <p>First Name*</p>
            <input
              className="bg-gray-200 rounded-[5px] h-[30px] px-[16px]"
              type="text"
            ></input>
          </div>
          <div>
            <p>Last Name*</p>
            <input
              className="bg-gray-200 rounded-[5px] h-[30px] px-[16px]"
              type="text"
            ></input>
          </div>
        </div>
        <div className="grid m-[12px]">
          <p>Email Address*</p>
          <input
            className="bg-gray-200 rounded-[5px] h-[30px]"
            type="email"
          ></input>
        </div>

        <div className="m-[12px]">
          <p className="mb-2">Query Type*</p>
          <div className="flex">
            <div className="bg-gray-200 rounded-[5px] h-[30px] flex items-center w-[265px]">
              <input className="m-3" type="radio" name="base" />
              <p>General Enquiry</p>
            </div>
            <div className="bg-gray-200 rounded-[5px] h-[30px] ml-[10px] flex items-center w-[265px] ">
              <input className="m-3" type="radio" name="base" />
              <p>Support Request</p>
            </div>
          </div>
        </div>

        <div className="m-[12px]">
          <p>Message*</p>
          <textarea className="bg-gray-200 resize-none rounded-[5px] h-[70px] w-[515px] p-1 pl-2"></textarea>
        </div>

        <div className="flex gap-4 items-center m-[12px]">
          <input className="bg-gray-200 rounded-[5px] h-[30px]" type="checkbox" />
          I consent to being contacted by the team*
        </div>
          <button className="bg-[rgba(12,125,105,255)] rounded-[5px] h-[40px] m-[12px] text-white hover:bg-[rgba(10,100,90,250)] duration-[0.3s] hover:scale-[1.03]">Submit</button>
      </div>
    </main>
  );
}
