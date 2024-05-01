"use client";
import React from "react";

const PlanHeader = ({form, onCreate}) => {
  return (
    <header className="px-24 py-4 flex justify-evenly items-center">
      <h1 className="text-xl font-bold">AI Business Planner</h1>
      {!form && (<button onClick={onCreate} className="bg-green-400 px-4 p-1  rounded-full font-bold text-lg text-slate-100">NEW PLAN</button>)}
    </header>
  );
};

export default PlanHeader;
