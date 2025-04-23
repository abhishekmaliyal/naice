import React from "react";
import { CardDescription, CardHeader, CardTitle } from "./card";

export default function Header() {
  return (
    <>
      <CardHeader className="cursor-[url('/nice.png'),_pointer]">
        <CardTitle>
          <p className="title text-5xl">naice</p>
        </CardTitle>
        <CardDescription>
          <p className="description text-lg">
            a counter till Wednesday, November 10, 2190, 18:56:09 GMT
          </p>
        </CardDescription>
      </CardHeader>
    </>
  );
}
