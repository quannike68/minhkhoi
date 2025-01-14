"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdPhoneInTalk, MdOutlineSearch, MdLocationOn } from "react-icons/md";

import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import menuItems from "@/app/data/Navbardata";

const Header = () => {
  return (
    <div className="h-20 w-full bg-white content-center flex space-x-12 items-center px-10">
      <div className=" border-gray-50">
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

      <div className="space-x-3 text-slate-950/60 w-2/5 flex">
      <div className="relative ">
        <Menu>
          <MenuButton className="  h-9 content-center pl-2 rounded-2xl border border-slate-950/20  bg-slate-950/10 ">
            <div className="flex">
              <div>Tất cả</div>
              <FaCaretDown className="rotate-180 transition-all mx-4 size-5 " />
            </div>
          </MenuButton>

          <MenuItems transition className={`absolute left-0 top-8 z-10 mt-2 w-32 overflow-hidden  origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}>
            {menuItems.map((item, index) => (
              <div className="px-3 py-1  hover:bg-[--maincolor]">
                <MenuItem key={index}>
                <Link href={`${item.link}`}>
                <div className=" ">{item.label}</div>
                </Link>
                </MenuItem>
              </div>
            ))}
          </MenuItems>
        </Menu>
        </div>

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

      <div className="w-3/5 flex space-x-5 justify-end">
        <div className="h-20 content-center text-slate-950/60  group ">
          <button className="flex space-x-2 items-center pr-5 border-r ">
            <MdLocationOn className="group-hover:text-slate-950/90" />
            <div className="uppercase font-roboto text-sm group-hover:text-slate-950/80 group-hover:font-roboto-700">
              Địa chỉ
            </div>
          </button>
        </div>
        <div className="h-20 content-center text-slate-950/60  ">
          <button className="flex space-x-2 items-center pr-5 border-r">
            <CiClock2 />
            <div className="uppercase font-roboto text-sm ">8:00 17:30</div>
          </button>
        </div>
        <div className="h-20 content-center text-slate-950/60  ">
          <button className="flex space-x-2 items-center ">
            <MdPhoneInTalk />
            <div className="uppercase font-roboto text-sm ">
              +84 961 979 922
            </div>
          </button>
        </div>
        <div className="h-20 content-center text-[--maincolor] relative ">
          <Link href="/">
            <div className="uppercase font-roboto-700 group inline-block relative">
              Chính sách bảo hành
              <span className="absolute bottom-0 left-1/2 w-16 h-[2px] bg-[--maincolor] transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
