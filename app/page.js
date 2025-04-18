"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CountdownPage() {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculateRemainingTime() {
      const futureUTCSeconds = 6969696969;
      const currentUTCSeconds = Math.floor(Date.now() / 1000);

      let remainingSeconds = futureUTCSeconds - currentUTCSeconds;

      if (remainingSeconds <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(remainingSeconds / (60 * 60 * 24));
      remainingSeconds -= days * 60 * 60 * 24;
      const hours = Math.floor(remainingSeconds / (60 * 60));
      remainingSeconds -= hours * 60 * 60;
      const minutes = Math.floor(remainingSeconds / 60);
      remainingSeconds -= minutes * 60;
      const seconds = Math.floor(remainingSeconds);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }

    const timer = setInterval(() => {
      setTimeRemaining(calculateRemainingTime());
    }, 1000);

    setTimeRemaining(calculateRemainingTime());

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="contain w-screen h-screen">
        <div className="timer p-10 w-full h-full">
          <Card className="w-full h-full p-10">
            <Card className="w-full h-full p-10">
              <CardHeader>
                <CardTitle>naice</CardTitle>
                <CardDescription>a counter till Wednesday, November 10, 2190, 18:56:09 GMT</CardDescription>
              </CardHeader>
              <CardContent>
                <Card className="w-full h-full p-10">
                  <Tabs defaultValue="complete" className="w-full">
                    <TabsContent value="complete">
                      for the remaining time in complete form (days-hours-minutes-seconds){" "}
                    </TabsContent>
                    <TabsContent value="hours">for the remaining time in hours</TabsContent>
                    <TabsContent value="minutes">for the remaining time in minutes</TabsContent>
                    <TabsContent value="seconds">for the remaining time in seconds</TabsContent>
                    <TabsList>
                      <TabsTrigger value="complete">complete</TabsTrigger>
                      <TabsTrigger value="hours">Hours</TabsTrigger>
                      <TabsTrigger value="minutes">Minutes</TabsTrigger>
                      <TabsTrigger value="seconds">Seconds</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </Card>
              </CardContent>
              <CardFooter>
                <p>made with 🖤 by Abhishek Maliyal</p>
              </CardFooter>
            </Card>
            {/* <div className="days">{timeRemaining.days}</div>
          <div className="hours">{timeRemaining.hours}</div>
          <div className="minutes">{timeRemaining.minutes}</div>
          <div className="seconds">{timeRemaining.seconds}</div> */}
          </Card>
        </div>
      </div>
    </>
  );
}
