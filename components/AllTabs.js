import React from "react";
import { TabsList, TabsTrigger } from "./ui/tabs";

export default function AllTabs() {
  return (
    <>
      <TabsList className="gap-4 bg-transparent py-10">
        <TabsTrigger value="complete" className="h-10 w-24 data-[state=inactive]:bg-gray-100">
          complete
        </TabsTrigger>
        <TabsTrigger value="hours" className="h-10 w-24 data-[state=inactive]:bg-gray-100">
          Hours
        </TabsTrigger>
        <TabsTrigger value="minutes" className="h-10 w-24 data-[state=inactive]:bg-gray-100">
          Minutes
        </TabsTrigger>
        <TabsTrigger value="seconds" className="h-10 w-24 data-[state=inactive]:bg-gray-100">
          Seconds
        </TabsTrigger>
      </TabsList>
    </>
  );
}
