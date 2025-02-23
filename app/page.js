'use client';
import Navbar from "../components/navbar"; 
import Header from "../components/header"; 
import About from "../components/about"; 
import Services from "../components/services"; 
import Projects from "../components/projects"; 
import Contact from "../components/contact"; 
import Footer from "../components/footer"; 




export default function Home() {
  
  return (
    <>
      <Navbar />
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>

    </>
  );
}
