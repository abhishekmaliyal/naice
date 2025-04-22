import React from "react";
import TimeProvider from "./context/timeContext";
import CountdownPage from "@/components/CountDown";

export default function Page() {
  return (
    <TimeProvider>
      <CountdownPage />
    </TimeProvider>
  );
}
