import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import logo from "../assets/logo.svg";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Features",
    children: [
      { title: "To do list" },
      { title: "Calendar" },
      { title: "Reminders" },
      { title: "Planning" },
    ],
  },
  {
    title: "Company",
    children: [{ title: "History" }, { title: "Our Team" }, { title: "Blog" }],
  },
  { title: "Careers" },
  { title: "About" },
];

const Header = () => {
  return (
    <header className="flex gap-10 items-center bg-white py-4 px-2">
      <Image width={50} height={50} alt="logo" src={logo} />
      <div className="flex gap-8 items-center text-gray-600">
        {menuItems.map((item)=>{
            return item.hasOwnProperty("children") ? (<Dropdown item={item}/>) : (<Link className="hover:text-black" href={item?.route || ""}>{item.title}</Link>)
        })}
      </div>
    </header>
  );
};

export default Header;
