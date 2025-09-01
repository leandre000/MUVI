"use client";

import NavbarCom from "@/app/component/Navbar";
import { Loader } from "@/app/component/ui/loader";
import React, { lazy, Suspense } from "react"; 

const Home = lazy(() => import("@/app/component/Home"));
const TopRatedMovie = lazy(() => import("@/app/component/TopRatedMovies"));
const StreamCard = lazy(() => import("@/app/component/StreamCard"));
const Mempership = lazy(() => import("@/app/component/Mempership"));
const Faqs = lazy(() => import("@/app/component/Faqs"));
const Footer = lazy(() => import("@/app/component/Footer"));

const Hero: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* Navbar can be outside Suspense if you want it to load instantly */}
        <NavbarCom />
        <Home />
        <TopRatedMovie />
        <StreamCard />
        <Mempership />
        <Faqs />
        <Footer />
      </Suspense>
    </>
  );
};

export default Hero;
