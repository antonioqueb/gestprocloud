'use client'
// app/page.js

import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Faq from '@/components/Faq';
import Baner from '@/components/Banner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MultiCards from '@/components/MultiCards';
import Testimonials from '@/components/component/testimonials';
import LastProjects from '@/components/component/last-projects';
import ContentCardsBlog from '@/components/component/content-cards-blog';
import Navbar from "@/components/Nabvar"
import NabvarUsers from "@/components/NabvarUsers"
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <>
      {session ? <NabvarUsers /> : <Navbar />}
      <Baner />
      <MultiCards  />
      <Servicios />
      <Testimonials />
      <Hero />
      <LastProjects />
    
     
     

    
      
     
      

      
    
      
      <ContactSection />
      {/* <ContentCardsBlog /> */}
      <Faq />
      <Footer />
      

    </>
  );
}
