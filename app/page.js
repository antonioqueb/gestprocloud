'use client'
// app/page.js

import Servicios from '@/components/Servicios';
import Faq from '@/components/Faq';
import Baner from '@/components/Banner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MultiCards from '@/components/MultiCards';
import Testimonials from '@/components/component/testimonials';
import LastProjects from '@/components/component/last-projects';
import Navbar from "@/components/Nabvar"

export default function Home() {
 
  return (
    <>
      <Navbar />
      <Baner />
      <MultiCards  />
      <Servicios />
      <Testimonials />
      {/* <Hero /> */}
      <LastProjects />
    
     
     

    
      
     
      

      
    
      
      <ContactSection />
      {/* <ContentCardsBlog /> */}
      <Faq />
      <Footer />
      

    </>
  );
}
