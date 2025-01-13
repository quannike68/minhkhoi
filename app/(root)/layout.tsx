import React from "react";
import Navbar from "../component/Navbar";
import {
  MdEmail,
  MdPhoneInTalk,
  MdOutlineSearch,
  MdLocationOn,
} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="h-20 w-full bg-white content-center flex space-x-12 items-center px-28">
        <div className="border-r border-gray-50">
          <Link href="/">
            <Image
              className="filter"
              src="/logo.jpg"
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
        </div>

        <div className="space-x-3 text-slate-950/60 w-3/5 flex">
          <button className=" group  h-9 content-center pl-2 rounded-2xl border border-slate-950/20  bg-slate-950/10">
            <div className="flex">
              <div>Tất cả</div>
              <FaCaretDown className="rotate-180 transition-all group-hover:rotate-0 mx-4 size-5 " />
            </div>
          </button>

          <div className="relative w-3/5 ">
            <input
              className="px-6 border rounded-2xl h-9 w-full border-slate-950/20  bg-slate-950/10"
              type="text"
              name="search"
              defaultValue={`Văn phòng phẩm`}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
              <MdOutlineSearch />
            </span>
          </div>
        </div>

        <div className="w-2/5 ">
          <div className="h-20 content-center text-slate-950/60 group ">
            <button className="flex space-x-2 items-center">
              <MdLocationOn className="group-hover:text-slate-950/90" />
              <div className="uppercase font-roboto text-sm group-hover:text-slate-950/80 group-hover:font-roboto-700">Địa chỉ</div>
            </button>
          </div>
        </div>

        {/* <div className='flex items-center font-roboto'>
            <MdEmail className='size-5'/>
            <p>incongnghemk@gmail.com</p>
            </div>
            <div className='flex items-center font-roboto'>
            <MdPhoneInTalk className='size-5'/>
            <p>+84 961 979 922</p>
            </div> */}
      </div>
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
