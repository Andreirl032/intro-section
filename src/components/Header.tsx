import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import logo from "../../public/assets/logo.svg";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
  icon?: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Features",
    children: [
      { title: "To do list",icon:"/assets/icon-todo.svg"},
      { title: "Calendar",icon:"/assets/icon-calendar.svg" },
      { title: "Reminders",icon:"/assets/icon-reminders.svg" },
      { title: "Planning",icon:"/assets/icon-planning.svg" },
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
      <Link href="">
      <Image
        width={80}
        height={80}
        alt="logo"
        src={logo}
        className="mx-6 mt-2"
        />
        </Link>
      <div className="flex gap-10 items-center text-gray-600">
        {menuItems.map((item, index) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown key={index} item={item} />
          ) : (
            <Link
              key={index}
              className="hover:text-black"
              href={item?.route || ""}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-10 items-center text-gray-600 ml-auto mr-10">
        <Link className="hover:text-black" href="">
          Login
        </Link>
        <Link
          className="transition hover:text-white hover:bg-black border-2 border-gray-600 px-3 pt-[0.45rem] pb-[0.5rem] rounded-xl"
          href=""
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
