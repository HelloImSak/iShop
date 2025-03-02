import React from "react";
import CardDisComponnets from "../CardDisComponnets";

export default function LayoutCardCom() {
  return (
    <main className="flex items-center justify-center h-screen  ">
      <section className="grid grid-cols-3 gap-x-[30px] gap-y-[30px] w-full max-w-[1000px] h-screen p-4">
       <CardDisComponnets/>
       <CardDisComponnets/>
       <CardDisComponnets/>
       <CardDisComponnets/>
       <CardDisComponnets/>
       <CardDisComponnets/>
       <CardDisComponnets/>
       <CardDisComponnets/>
       <CardDisComponnets/>
      </section>
    </main>
  );
}
