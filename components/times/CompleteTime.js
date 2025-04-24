import React from "react";
import { Card } from "../ui/card";
import { useTime } from "@/app/context/timeContext";

export default function CompleteTime() {
  const timeRemaining = useTime();
  return (
    <>
      <Card className="time h-full w-full lg:p-10 p-2 grid lg:grid-cols-4 m-auto">
        <Card className="d flex items-center justify-center lg:text-6xl text-4xl">
          <div className="days">
            <span className="description text-lg flex justify-center">days : </span>
            {timeRemaining.days}
          </div>
        </Card>
        <Card className="hr flex items-center justify-center lg:text-6xl text-4xl">
          <div className="hours">
            <span className="description text-lg flex justify-center">hours : </span>
            {timeRemaining.hours}
          </div>
        </Card>
        <Card className="min flex items-center justify-center lg:text-6xl text-4xl">
          <div className="minutes">
            <span className="description text-lg flex justify-center">minutes : </span>
            {timeRemaining.minutes}
          </div>
        </Card>
        <Card className="sec flex items-center justify-center lg:text-6xl text-4xl">
          <div className="seconds">
            <span className="description text-lg flex justify-center">seconds : </span>
            {timeRemaining.seconds}
          </div>
        </Card>
      </Card>
    </>
  );
}
