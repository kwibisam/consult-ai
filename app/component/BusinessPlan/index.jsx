"use client";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
const BusinessPlan = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const handleCopyText = () => {
    const textToCopy = data.data;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  return (
    <div className="h-screen flex justify-center px-24 py-6">
      <div className="w-[65%]">
        <div className="flex justify-between items-center bg-gray-400 p-4 rounded-lg">
          <h2 className="text-2xl mb-6 font-semibold">Business Plan</h2>
          <button
            className="mx-6 px-2 py-1 text-slate-100 font-bold rounded-full bg-blue-400"
            onClick={handleCopyText}
          >
            {copied ? "Copied!" : "Copy Text"}
          </button>
        </div>

        <div className="h-[100%] w-full p-1 overflow-y-scroll">
          <Markdown
            className="whitespace-pre-wrap bg-gray-100 p-24 rounded-lg"
            remarkPlugins={[remarkGfm]}
          >
            {data.data}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
