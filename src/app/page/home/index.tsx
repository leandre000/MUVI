import Home from '@/app/component/Home' 
import React, { lazy } from 'react'

const Hero = () => {
  const TopRatedMovie = lazy(() => import('@/app/component/TopRatedMovies'));
  const StreamCard = lazy(() => import('@/app/component/StreamCard'));
  const Mempership = lazy(() => import('@/app/component/Mempership'));
  const Faqs = lazy(() => import('@/app/component/Faqs'));
  const Footer = lazy(() => import('@/app/component/Footer'));
  return (
    <> 
    <Home/>
    <TopRatedMovie />
    <StreamCard/>
    <Mempership/>
    <Faqs/>
    <Footer/>
    </>
  )
}

export default Hero
