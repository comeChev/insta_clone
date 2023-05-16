import Image from "next/image";
import {
  AiFillHome,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";

export default function Header() {
  return (
    <div className="max-w-6xl flex items-center justify-between mx-auto p-4">
      {/* Logo & text */}
      <div className="flex items-center">
        <Image
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2a%2FInstagram_logo.svg%2F1200px-Instagram_logo.svg.png&f=1&nofb=1&ipt=3fb1be58a9abd91a27e21aabd0c7b26fd3cd5affb1a49671d97b3dfa4ec8b107&ipo=images"
          width={200}
          height={100}
          alt="Instagram Logo"
          priority={true}
          className="hidden lg:flex object-contain h-24 w-24 cursor-pointer"
        />
        <Image
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe7%2FInstagram_logo_2016.svg%2F1200px-Instagram_logo_2016.svg.png&f=1&nofb=1&ipt=fac1d01f7cc866afd84cf59f8dd528a01951f04beaa09038477379383575d636&ipo=images"
          width={200}
          height={100}
          alt="Instagram Logo"
          priority={true}
          className="lg:hidden object-contain h-10 w-10 cursor-pointer"
        />
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
        <AiOutlinePlusCircle className="text-xl hover:scale-125 transition duration-200 ease-in-out cursor-pointer" />
        <Image
          height={200}
          width={200}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.braceletbookcdn.com%2Fusers%2F000%2F000%2F009%2F076%2F000000009076%2Fimage.jpg&f=1&nofb=1&ipt=5c65b538c9355a0aa5e864a1466e97388ef011a65c41b4ae673528dc23166b39&ipo=images"
          alt="User Profile Picture"
          className="h-10 w-10 object-contain rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
