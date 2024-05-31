"use client";
import { SignIn } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { ButtonLanding } from "./Landingpage-button";
import Image from "next/image";

export const LandingHomePage = () => {
  return (
    <main className="flex flex-row h-screen ">
      <div className="bg-gray-500 flex justify-center items-center w-[70%]">
        <div className="rounded-full border border-gray-200 border-solid  h-40 w-40 p-3 flex items-center text-center justify-center bg-transparent">
          <Image
            alt="jemmohkicks logo"
            src="/image/converse-clipart-shoe-jordan-2.png"
          />
        </div>
      </div>
      <div className="bg-white flex justify-center items-center  flex-col">
        <Image
          alt="jemmohkicks logo"
          src="/image/JemmohKicks_Trimmed.png"
          className="w-full h-24 px-2"
        />
      </div>
    </main>
  );
};
