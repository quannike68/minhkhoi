"use client";

import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import menuItems from "../data/Navbardata";

import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { PiListBold } from "react-icons/pi";
import { IoIosSearch, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isClosingList, setIsClosingList] = useState(false);

  function SideMenu() {
    setIsClosing(true);
    setTimeout(() => {
      setSideMenue(!isSideMenuOpen);
      setIsClosing(false);
    }, 500);
  }

  const ListMobileAnimation = () => {
    setIsClosingList(true);
    setTimeout(() => {
      setIsClosingList(false);
    });
  };

  const toggleMenu = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  return (
    <nav className="flex border-orange-200 text-black w-full justify-between px-4 py-5 static shadow-lg" >
      <section className="flex items-center w-full justify-between">
        <div className="flex items-center">
          {/* <div className="border-r border-gray-50">
            <Link href="/">
              <Image
                className="filter"
                src="/logo.jpg"
                alt="logo"
                width={80}
                height={80}
              />
            </Link>
          </div> */}

          {/* Menu Items */}
          <div className="hidden w-full xl:flex items-center gap-4 ml-5 font-roboto-700">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group px-2 py-3 ">
                <p className="flex cursor-pointer items-center gap-2 group-hover:text-black">
                  <span>{item.label}</span>
                  {item.children && (
                    <AiFillCaretDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </p>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute left-0 top-10 opacity-0 scale-50 flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                    {item.children.map((ch, i) => (
                      <Link
                        key={i}
                        href={ch.link ?? "#"}
                        className="flex items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                      >
                        <span className="flex whitespace-nowrap pl-3 items-center">
                          {ch.label}
                          {ch.children && (
                          <AiFillCaretRight className="transition-all items-center" />
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}

          {!isSideMenuOpen && (
            <button className="xl:hidden" onClick={SideMenu}>
              <PiListBold className="size-10 mx-5 " />
            </button>
          )}

          {isSideMenuOpen && (
            <div
              className={`w-full h-auto top-0 left-0 p-5 bg-white text-[--maincolor] shadow-md  absolute z-50 ${
                isClosing ? "animate-slideUp" : "animate-slideDown"
              }`}
            >
              <div className="flex justify-between">
                <div className="text-2xl uppercase font-roboto-700">
                  Trang chu
                </div>
                <button>
                  <IoMdClose className="size-10" onClick={SideMenu} />
                </button>
              </div>

              <div>
                {menuItems.map((item, index) => (
                  <div className="border-b my-5">
                    <div className="flex justify-between w-full font-roboto-700 text-[--maincolor] text-xl uppercase">
                      <span>{item.label}</span>
                      <button
                        onClick={() => {
                          toggleMenu(index), ListMobileAnimation();
                        }}
                      >
                        <AiFillCaretDown className="transition-all items-center text-[--maincolor]" />
                      </button>
                    </div>

                    {activeIndex === index && item.children && (
                      <div
                        className={`${
                          isClosingList
                            ? "animate-slideUp"
                            : "animate-slideDown"
                        }`}
                      >
                        <ul className={`mx-5 text-black `}>
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <div className="flex items-center justify-between text-xl font-roboto-700">
                                <a href={child.link}>{child.label}</a>
                                {child.children && (
                                  <AiFillCaretDown className="transition-all items-center text-black" />
                                )}
                              </div>

                              {child.children && (
                                <ul className="ml-5">
                                  {child.children.map(
                                    (subChild, subChildIndex) => (
                                      <li key={subChildIndex}>
                                        <a href={subChild.link}>
                                          {subChild.label}
                                        </a>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        {/* <div className="flex space-x-4">
          <button className="text-white hover:text-gray-300 focus:outline-none">
            <IoIosSearch className="size-8" />
          </button>

          <button className="bg-white text-black px-2 py-1 rounded-lg border border-orange-500 hover:bg-orange-600 hover:text-white transition shadow-2xl">
            Đăng nhập
          </button>
        </div> */}
      </section>
    </nav>
  );
};

export default Navbar;
