import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Billboard from "@/components/Billboard";





export default function Home() {
  return (
    <>
      <Navbar />
      <Billboard />
    </>
  )
}


  


