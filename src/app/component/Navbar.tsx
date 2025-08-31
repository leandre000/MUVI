"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/app/component/ui/resizable-navbar";
import { useState } from "react";
import Button from "./Button"; 
import { LogIn } from "lucide-react";

const NavbarCom = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Movies & Shows",
      link: "#movies",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} /> 
  <Button
    label={
      <span className="flex items-center cursor-pointer gap-2 justify-center">
        <LogIn className="w-4 h-4 cursor-pointer" />
        Login
      </span>
    }
    onClick={() => {}}
  /> 
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              
  <Button
    label={
      <span className="flex items-center gap-2 justify-center">
        <LogIn className="w-4 h-4 cursor-pointer" />
        Sign
      </span>
    }
    onClick={() => {}}
  /> 
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}

export default NavbarCom;