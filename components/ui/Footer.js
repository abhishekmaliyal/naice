import React from "react";
import { ModeToggle } from "../theme/darkmode";
import { CardFooter } from "./card";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <CardFooter className="cursor-[url('/nice.png'),_pointer]">
        <div className="credit flex w-full h-full items-center justify-start ">
          <p className="credit text-lg">
            made with 🖤 by <span className="title"> <Link href="https://abhishekmaliyal.netlify.app" className="hover:underline hover:underline-offset-8"> Abhishek Maliyal</Link></span>
          </p>
        </div>
        <div className="mode flex w-full h-full items-center justify-end">
          <ModeToggle />
        </div>
      </CardFooter>
    </>
  );
}
