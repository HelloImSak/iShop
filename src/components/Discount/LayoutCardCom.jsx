import React from "react";
import CardDisComponnets from "../CardDisComponnets";

export default function LayoutCardCom() {
  return (
    <main>
      <section className="grid grid-cols-3 gap-x-[30px] gap-y-[30px] w-3/4 p-4">
        <CardDisComponnets />
        <CardDisComponnets />
        <CardDisComponnets />
        <CardDisComponnets />
        <CardDisComponnets />
        <CardDisComponnets />
      </section>
    </main>
  );
}
