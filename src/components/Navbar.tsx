import Image from "next/image";
import Link from "next/link";
import React, { lazy } from "react";
Image;

export const Navbar = () => {
  const links = [
    {
      title: "Guide",
      href: "/Guide",
    },
    {
      title: "Pricing",
      href: "/Pricing",
    },
    {
      title: "Login",
      href: "/Login",
    },
  ];
  return (
    <div className="flex items-center justify-between pt-3">
      <Link href="/">
        <Image
          draggable={false}
          loading="lazy"
          src="/logo.svg"
          height={70}
          width={70}
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-[#6c6c6c] tracking-[-0.01em] font-[600] hover:text-neutral-500 transition duration-200 antialiased "
          >
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2579f4] text-[#ffffff] px-4 py-1.5 rounded-lg shadow-lg text-shadow-md font-bold">
          Start New Trial
        </button>
      </div>
    </div>
  );
};
