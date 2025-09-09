"use client";

import NavbarCom from "@/app/component/Navbar";
import { Loader } from "@/app/component/ui/loader";
import { useSearchParams } from "next/navigation"; // ✅ App Router hook
import React, { lazy, Suspense, useEffect } from "react";

const Home = lazy(() => import("@/app/component/Home"));
const TopRatedMovie = lazy(() => import("@/app/component/TopRatedMovies"));
const StreamCard = lazy(() => import("@/app/component/StreamCard"));
const Mempership = lazy(() => import("@/app/component/Mempership"));
const Faqs = lazy(() => import("@/app/component/Faqs"));
const Footer = lazy(() => import("@/app/component/Footer"));

const Hero: React.FC = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // ✅ read ?token= from URL

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      console.log("JWT Token:", token);
    }
  }, [token]);

  return (
    <Suspense fallback={<Loader />}>
      <NavbarCom />
      <Home />
      <TopRatedMovie />
      <StreamCard />
      <Mempership />
      <Faqs />
      <Footer />
    </Suspense>
  );
};

export default Hero;
