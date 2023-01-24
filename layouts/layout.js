// components

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Team from "../components/team";

import Hero from "../components/hero";
import Community from "../components/community";
import Partners from "../components/partner";

import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import { useSession } from "next-auth/react";

//import stylesteam from "../styles/Team.module.scss";
export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export default function Layout() {
  return (
    <>
      <div className="relative mx-auto h-full w-full px-8 py-4">
        <Navbar />
        <Hero />
        <Community />
        <Partners />
        <Faq />
        <Team />
        <Footer />
        <PopupWidget />
      </div>
    </>
  );
}
