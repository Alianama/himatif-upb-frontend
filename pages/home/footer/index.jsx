import { LinkPreview } from "@/components/ui/link-preview";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";
function Footer() {
  const router = useRouter();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/profile/location", label: "Location" },
    { href: "/contact", label: "Contact Us" },
    { href: "/news", label: "TIF News" },
    { href: "/lab", label: "LAB" },
    { href: "/tif", label: "TIF" },
    { href: "/staff", label: "Pengurus" },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com/himatifupb",
      src: "/icon/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://example2.com",
      src: "/icon/whatsapp.svg",
      alt: "whatsapp",
    },
    {
      href: "https://example3.com",
      src: "/icon/youtube.svg",
      alt: "youtube",
    },
    {
      href: "https://example4.com",
      src: "/icon/twitter.svg",
      alt: "twitter",
    },
  ];

  return (
    <footer className="flex flex-col bg-0 mt-10 flex-wrap">
      <div className="flex justify-around font-poppins max-md:flex-col max-md:gap-5 border-t-2 p-10">
        <div className="basis-2/4 flex  flex-col justify-start items-center px-10 gap-3">
          <div className="text-white">
            <h1 className="text-xl font-medium">HIMATIF</h1>
          </div>
          <div className="text-sm flex flex-col gap-5">
            <h1 className="gap-2 hover:scale-105 transition-all ease-in-out text-white justify-center flex flex-col items-center text-center">
              <MdLocationPin fill="white" size={29} />
              <LinkPreview
                url="https://maps.app.goo.gl/mpau47PP2mvuzEga6"
                className="gap-2 hover:scale-105 transition-all ease-in-out text-white justify-center flex flex-col items-center text-center"
              >
                Jl. Inspeksi Kalimalang No.9, Cibatu, Cikarang Sel., Kabupaten
                Bekasi, Jawa Barat 17530
              </LinkPreview>
            </h1>
            <h1 className="gap-2 hover:scale-105 transition-all ease-in-out text-white justify-center flex flex-col items-center text-center">
              <BsFillTelephoneFill fill="white" size={20} />
              089631149187
            </h1>
            <h1 className="gap-2 hover:scale-105 transition-all ease-in-out text-white justify-center flex flex-col items-center text-center">
              <MdEmail fill="white" size={20} />
              <a href="mailto:himatif@pelitabangsa.ac.id">
                himatif@pelitabangsa.ac.id
              </a>
            </h1>
          </div>
        </div>
        <div className="basis-2/4 flex  flex-col justify-start items-center px-10 gap-3">
          <div className="text-white">
            <h1 className="text-xl font-medium">QUICK LINK</h1>
          </div>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} legacyBehavior>
                  <a
                    className={`no-underline transition-colors text-white text-sm hover:text-5 justify-center items-center flex duration-200 ease-in-out py-3 px-5 rounded-full ${
                      item.href === router.asPath
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col justify-start items-center px-10 gap-3">
          <div className="text-white">
            <h1 className="text-xl font-medium">Connect with US</h1>
          </div>
          <div className="relative">
            <Dock magnification={60} distance={100}>
              {socialLinks.map((link, index) => (
                <DockIcon
                  key={index}
                  className="bg-white/10 dark:bg-white/10 p-3"
                  onClick={() => window.open(link.href, "_blank")}
                >
                  <Image src={link.src} width={50} height={50} alt={link.alt} />
                </DockIcon>
              ))}
            </Dock>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-0 text-sm py-2 px-10 text-center rounded-t-full flex-wrap text-wrap bg-white">
        <p>Copyright © 2024 HIMATIF, Universtas Pelita Bangsa</p>
      </div>
    </footer>
  );
}

export default Footer;
