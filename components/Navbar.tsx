
import { useEffect, useState } from "react";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useCallback } from "react";

import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setshowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
 
  const toggleAccountMenu = useCallback(() => {
    setshowAccountMenu((current: any) => !current);
  }, []);


  return (
    <nav className="fixed w-full bg-zinc-900 z-40">
      <div
        className={`
            px-4
            md:px-16
            py-1
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-zinc-900
            bg-opacity-90
            `}
      >
        <img className="h-9 lg:h-9" src="/images/logo.png" alt="Logo" />
        <div
          className="
                flex-row
                ml-3
                gap-4
                hidden
                lg:flex
                "
        >
          <NavbarItem label="Home"  />
          <NavbarItem label="Series"  />
          <NavbarItem label="Films"  />
          <NavbarItem label="New & Popular"  />
          <NavbarItem label="My List"  />
          <NavbarItem label="Browse by languages"  />
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0' }`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
      
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>
        </div>

        <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-3 ml-6 cursor-pointer relative">
          <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
            <img src="/images/netflix-profile.jpg" alt="Profile" />
          </div>
          <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0' }`} />
          <AccountMenu visible={showAccountMenu} />
        </div>

      </div>
    </nav>
  );
}; 

export default Navbar;
