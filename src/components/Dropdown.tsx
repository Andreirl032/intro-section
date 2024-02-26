"use client";
import React, { useState } from "react";
import Link from "next/link";

import { MenuItem } from "./Header";

import Image from "next/image";

import downArrow from "../../public/assets/icon-arrow-down.svg";

interface Props {
  item: MenuItem;
}

const Dropdown = (props: Props) => {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="relative">
        <button className="hover:text-black flex flex-row items-center gap-2" onClick={toggle}>
          <p>{item.title}</p>
          <Image alt="down-arrow" src={downArrow} width={10} height={10} />
        </button>
        <div
          className={`absolute right-0 top-8 z-30 w-44 min-h-9 flex flex-col gap-1 py-4 pl-3 justify-around bg-white rounded-xl border-1 ${transClass}`}
          style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px"}}
        >
          {menuItems.map((item) => (
            <Link
              key={item.route}
              className="hover:bg-white hover:text-black px-4 py-1 min-h-9 flex"
              href={item?.route || ""}
              onClick={toggle}
            >
              <div className="flex gap-4 items-center">
              {item.icon && <Image alt="dropdown-icon" src={item.icon} width={20} height={20}></Image>}
              {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/0"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Dropdown;
