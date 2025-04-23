import React from "react";
import { Card } from "../ui/card";
import { useTime } from "@/app/context/timeContext";

export default function TotalSeconds() {
  const timeRemaining = useTime();
  return (
    <>
      <Card className="time h-full w-full p-10 text-6xl">
        <div className="seconds border rounded-xl border-gray-500 w-full h-full flex items-center justify-center">
          {timeRemaining.inSeconds}
        </div>
      </Card>
    </>
  );
}
