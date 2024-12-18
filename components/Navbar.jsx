import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import { useRouter } from "next/router";
import SparklesText from "@/components/magicui/sparkles-text";
import { CoolMode } from "@/components/magicui/cool-mode";
import { RiMenu5Fill } from "react-icons/ri";

const handleClick = (link) => {
  window.location.href = link;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("white");
  const [morph, setMorph] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        if (dropdownOpen) {
          setDropdownOpen(false);
        }
      }
    };

    const handleScroll = () => {
      setNavbarColor(
        window.scrollY > 1
          ? "backdrop-blur-sm border-himatif "
          : "bg-white border-white"
      );
      setMorph(
        window.scrollY > 1
          ? "w-full top-5 justify-center items-center fixed flex z-50 transition-all ease-in-out duration-500"
          : ""
      );
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownOpen]);

  const router = useRouter();

  return (
    <div
      className={`${morph} justify-center items-center flex transition-all ease-in-out duration-500`}
    >
      <div className="w-3/4 justify-center items-center">
        <nav
          className={`font-manguiera flex flex-col md:flex-row-reverse gap-10 ${
            menuOpen ? "max-md:rounded-[25px]" : "max-md:rounded-[90px]"
          } justify-between items-center w-full max-md:p-0 px-10  py-2 border-[2px] transition-all ease-in-out rounded-full ${navbarColor}`}
        >
          <div className="flex justify-between w-full md:w-auto items-center">
            <div
              onClick={() => {
                handleClick("/");
              }}
              data-aos="fade-right"
              className="flex mx-auto cursor-pointer items-center gap-3"
            >
              <SparklesText
                sparklesCount={5}
                className="text-2xl text-0 mt-2 max-md:text-xl"
                text="HIMATIF UPB"
              />
              <Image
                src="/image/logo.png"
                width={30}
                height={30}
                alt="Logo"
                priority
              />
            </div>
            <CoolMode>
              <button
                className="rounded-full flex text-sm md:hidden p-2 m-2 active:bg-6 bg-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <RiMenu5Fill />
              </button>
            </CoolMode>
          </div>

          <ul
            ref={menuRef}
            className={`flex-col md:flex-row gap-1 w-full md:w-auto justify-start items-center list-none md:flex ${
              menuOpen ? "flex" : "hidden"
            } md:flex`}
          >
            <li>
              <Link href="/" legacyBehavior>
                <a
                  className={`no-underline transition-colors text-0 text-sm justify-center items-center flex duration-500 ease-in-out pt-3 pb-2 px-5 rounded-full ${
                    "/" === router.asPath
                      ? "bg-white text-3"
                      : "hover:bg-white hover:text-5 hover:shadow-md"
                  }`}
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="relative">
              <button
                className="no-underline transition-colors hover:shadow-md text-0 text-sm justify-center items-center flex duration-500 ease-in-out pt-3 pb-2 px-5 rounded-full hover:bg-white hover:text-5"
                onMouseEnter={() => setDropdownOpen(true)}
              >
                Tentang Kami
              </button>
              {dropdownOpen && (
                <ul
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-48 z-20 text-0 bg-white border border-gray-200 rounded-xl shadow-lg"
                >
                  <li>
                    <Link href="/profile" legacyBehavior>
                      <a
                        className="block px-4 py-2 text-sm hover:shadow-md  hover:text-5 rounded-xl hover:bg-gray-100 "
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        Profile
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile/location" legacyBehavior>
                      <a
                        className="block px-4 py-2 text-sm hover:text-5 hover:shadow-md rounded-xl hover:bg-gray-100"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        Our Location
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" legacyBehavior>
                      <a
                        className="block px-4 py-2 text-sm hover:shadow-md hover:text-5 rounded-xl hover:bg-gray-100"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {[
              { href: "/news", label: "TIF News" },
              { href: "/lab", label: "LAB" },
              { href: "/galery", label: "Galery" },
              { href: "/staff", label: "Staff" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} legacyBehavior>
                  <a
                    className={`no-underline transition-colors text-0 text-sm justify-center items-center flex duration-500 ease-in-out pt-3 pb-2 px-5 rounded-full ${
                      item.href === router.asPath
                        ? "bg-white text-3"
                        : "hover:bg-white hover:text-5 hover:shadow-md"
                    }`}
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
