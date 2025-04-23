import React from "react";
import { TabsContent } from "./ui/tabs";
import CompleteTime from "./times/CompleteTime";
import TotalHours from "./times/TotalHours";
import TotalMinutes from "./times/TotalMinutes";
import TotalSeconds from "./times/TotalSeconds";

export default function AllContent() {
  return (
    <>
      <TabsContent value="complete" className="w-full h-full">
        <CompleteTime />
      </TabsContent>

      <TabsContent value="hours" className="w-full h-full">
        <TotalHours />
      </TabsContent>

      <TabsContent value="minutes" className="w-full h-full">
        <TotalMinutes />
      </TabsContent>

      <TabsContent value="seconds" className="w-full h-full">
        <TotalSeconds />
      </TabsContent>
    </>
  );
}
