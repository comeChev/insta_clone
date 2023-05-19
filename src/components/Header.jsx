import Image from "next/image";
import {
  AiFillHome,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import SessionLog from "./SessionLog";
import AddPost from "./AddPost";
import Link from "next/link";

export default function Header() {
  return (
    <div className="shadow-lg sticky top-0 bg-white z-30">
      <div className="max-w-6xl flex items-center justify-between mx-auto p-4">
        {/* Logo & text */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2a%2FInstagram_logo.svg%2F1200px-Instagram_logo.svg.png&f=1&nofb=1&ipt=3fb1be58a9abd91a27e21aabd0c7b26fd3cd5affb1a49671d97b3dfa4ec8b107&ipo=images"
              width={200}
              height={100}
              alt="Instagram Logo"
              priority={true}
              className="hidden lg:flex object-contain h-24 w-24 cursor-pointer"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe7%2FInstagram_logo_2016.svg%2F1200px-Instagram_logo_2016.svg.png&f=1&nofb=1&ipt=fac1d01f7cc866afd84cf59f8dd528a01951f04beaa09038477379383575d636&ipo=images"
              width={200}
              height={100}
              alt="Instagram Logo"
              priority={true}
              className="lg:hidden object-contain h-10 w-10 cursor-pointer"
            />
          </Link>
        </div>

        {/* Search input */}
        <div className="flex relative items-center">
          <AiOutlineSearch className="absolute ml-2 text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="text-black pl-8 bg-gray-50 border-gray-500 text-sm rounded focus:ring-black focus:border-black"
          />
        </div>

        {/* Menu right side */}
        <div className="flex items-center gap-4">
          <AiFillHome className="hidden md:flex text-xl hover:scale-125 transition duration-200 ease-in-out cursor-pointer" />
          <AddPost />
          <SessionLog />
        </div>
      </div>
    </div>
  );
}
