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
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image
          draggable={false}
          loading="lazy"
          src="/logo.svg"
          height={50}
          width={50}
          alt="logo"
        />
      </Link>
      {links.map((link, index) => (
        <Link href={link.href} key={index}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};
