"use client";

import { Card } from "@/components/ui/card";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";

export default function CountdownPage() {
  return (
    <>
      <div className="contain lg:p-10 w-screen h-screen">
        <Card className="w-full h-full lg:p-10">
          <Header />
          <Main />
          <Footer />
        </Card>
      </div>
    </>
  );
}
