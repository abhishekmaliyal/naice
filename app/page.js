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
import { ModeToggle } from "@/components/theme/darkmode";

export default function CountdownPage() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    inHours: 0,
    inMinutes: 0,
    inSeconds: 0,
  });

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

      const inHours = days * 24 + hours;
      const inMinutes = inHours * 60 + minutes;
      const inSeconds = inMinutes * 60 + seconds;

      return {
        days,
        hours,
        minutes,
        seconds,
        inHours,
        inMinutes,
        inSeconds,
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
                <CardTitle>
                  <p className="title text-5xl">naice</p>
                </CardTitle>
                <CardDescription>
                  <p className="description text-lg">
                    a counter till Wednesday, November 10, 2190, 18:56:09 GMT
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full h-full">
                <Card className="w-full h-full p-10">
                  <Tabs defaultValue="complete" className="w-full h-full">
                    <TabsContent value="complete" className="w-full h-full">
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
                    </TabsContent>

                    <TabsContent value="hours" className="w-full h-full">
                      <Card className="time h-full w-full p-10 text-6xl">
                        <div className="hours border rounded-xl border-gray-500 w-full h-full flex items-center justify-center">
                          {timeRemaining.inHours}
                        </div>
                      </Card>
                    </TabsContent>

                    <TabsContent value="minutes" className="w-full h-full">
                      <Card className="time h-full w-full p-10 text-6xl">
                        <div className="minutes border rounded-xl border-gray-500 w-full h-full flex items-center justify-center">
                          {timeRemaining.inMinutes}
                        </div>
                      </Card>
                    </TabsContent>

                    <TabsContent value="seconds" className="w-full h-full">
                      <Card className="time h-full w-full p-10 text-6xl">
                        <div className="seconds border rounded-xl border-gray-500 w-full h-full flex items-center justify-center">
                          {timeRemaining.inSeconds}
                        </div>
                      </Card>
                    </TabsContent>

                    <TabsList className="gap-4 bg-transparent py-10">
                      <TabsTrigger
                        value="complete"
                        className="h-10 w-24 data-[state=inactive]:bg-gray-100"
                      >
                        complete
                      </TabsTrigger>
                      <TabsTrigger
                        value="hours"
                        className="h-10 w-24 data-[state=inactive]:bg-gray-100"
                      >
                        Hours
                      </TabsTrigger>
                      <TabsTrigger
                        value="minutes"
                        className="h-10 w-24 data-[state=inactive]:bg-gray-100"
                      >
                        Minutes
                      </TabsTrigger>
                      <TabsTrigger
                        value="seconds"
                        className="h-10 w-24 data-[state=inactive]:bg-gray-100"
                      >
                        Seconds
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </Card>
              </CardContent>
              <CardFooter>
                <div className="credit flex w-full h-full items-center justify-start">
                  <p className="credit text-lg">
                    made with 🖤 by <span className="title"> Abhishek Maliyal</span>
                  </p>
                </div>
                <div className="mode flex w-full h-full items-center justify-end">
                  <ModeToggle />
                </div>
              </CardFooter>
            </Card>
          </Card>
        </div>
      </div>
    </>
  );
}
