"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FloatingCard from "./components/FloatingCard";
import Listings from "./components/Listings";
import Footer from "./components/Footer";
import {store} from "./store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="">
        <Navbar />
        <Banner />
        <FloatingCard />
        <Listings />
        <Footer />
      </main>
    </Provider>
  );
}
