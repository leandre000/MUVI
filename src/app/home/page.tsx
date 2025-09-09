"use client";

import NavbarCom from "@/app/component/Navbar";
import { Loader } from "@/app/component/ui/loader";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";

// ✅ Import components normally (Next.js handles lazy loading automatically)
import Home from "@/app/component/Home";
import TopRatedMovie from "@/app/component/TopRatedMovies";
import StreamCard from "@/app/component/StreamCard";
import Mempership from "@/app/component/Mempership";
import Faqs from "@/app/component/Faqs";
import Footer from "@/app/component/Footer";

function TokenHandler() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      console.log("JWT Token:", token);
    }
  }, [token]);

  return null; // nothing to render
}

const Hero: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <TokenHandler /> {/* ✅ wrapped in Suspense */}
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
