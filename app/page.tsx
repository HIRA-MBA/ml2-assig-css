import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header"
import NavBar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/Herosection/Herosection"


export default function Home() {
  return (
    <div >
     <Header></Header>
     <NavBar></NavBar>
     <HeroSection></HeroSection>
    </div>
  );
}
