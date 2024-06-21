import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FloatingCard from "./components/FloatingCard";
import Listings from "./components/Listings";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <FloatingCard />
      <Listings />
      <Footer />
    </main>
  );
}
