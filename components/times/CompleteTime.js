import React from "react";
import { Card } from "../ui/card";
import { useTime } from "@/app/context/timeContext";

export default function CompleteTime() {
  const timeRemaining = useTime();
  return (
    <>
      <Card className="time h-full w-full p-10 grid grid-cols-4">
        <Card className="d flex items-center justify-center text-6xl">
          <div className="days">{timeRemaining.days}</div>
        </Card>
        <Card className="hr flex items-center justify-center text-6xl">
          <div className="hours">{timeRemaining.hours}</div>
        </Card>
        <Card className="min flex items-center justify-center text-6xl">
          <div className="minutes">{timeRemaining.minutes}</div>
        </Card>
        <Card className="sec flex items-center justify-center text-6xl">
          <div className="seconds">{timeRemaining.seconds}</div>
        </Card>
      </Card>
    </>
  );
}
