import React from "react";
import { Card } from "../ui/card";
import { useTime } from "@/app/context/timeContext";

export default function TotalMinutes() {
  const timeRemaining = useTime();
  return (
    <>
      <Card className="time h-full w-full lg:p-10 p-2 lg:text-6xl text-4xl">
        <div className="minutes border rounded-xl border-gray-500 w-full h-full flex flex-col items-center justify-center">
          <div className="description text-lg flex justify-center">minutes : </div>
          {timeRemaining.inMinutes}
        </div>
      </Card>
    </>
  );
}
