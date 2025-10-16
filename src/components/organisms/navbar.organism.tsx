"use client";
import { useState } from "react";
import { MenuIcon } from "../atoms/menuIcon.atom";
import { Logo } from "../atoms/logo.atom";
import { NavLink } from "../molecules/navLink.molecule";
import { Button } from "../atoms/button.atom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 flex justify-between relative items-center">
      <MenuIcon open={open} onClose={setOpen} />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <Logo />
      </div>
      <div className="flex gap-8 items-center">
        <NavLink href="about" label="About" />
        <NavLink href="contact-us" label="Contact Us" />
        <Button icon="cart" />
      </div>
    </div>
  );
};

export { Navbar };
