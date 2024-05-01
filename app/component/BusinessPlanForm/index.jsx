"use client";
import React from "react";
import Image from "next/image";
const BusinessPlanForm = ({ formData, onChange, onGenerate }) => {
  const handleGenerate = (e) => {
    e.preventDefault();
    onGenerate();
  };
  return (
    <div className="min-h-screen flex justify-center items-center px-24 py-12">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4 leading-normal">
            Let AI build your business plan with confidence.
          </h1>
          <p className="text-lg">
            Save time on writing your business plan so you can bring your big
            idea to life. <br /> <strong>Get started in four easy steps:</strong>
          </p>
        </div>
        <form className="border border-gray-400 p-4 rounded-lg flex-1">
          <div className="form-div">
            <label className="form-label" htmlFor="overview">
              Company Overview
            </label>
            <textarea
              placeholder="Company overview, including mission, vision, and objectives"
              value={formData.overview}
              onChange={onChange}
              className="form-input"
              name="overview"
              id="overview"
              cols="30"
              rows="1"
            ></textarea>
          </div>

          <div className="form-div">
            <label className="form-label" htmlFor="marketing">
              Market Analysis
            </label>
            <textarea
              placeholder="Describe industry, market size, trends, and demographics."
              value={formData.marketing}
              onChange={onChange}
              className="form-input"
              name="marketing"
              id="marketing"
              cols="30"
              rows="1"
            ></textarea>
          </div>

          <div className="form-div">
            <label className="form-label" htmlFor="competition">
              Competitive Analysis
            </label>
            <textarea
              placeholder="Assess competitors' strengths, weaknesses, and market position."
              value={formData.competition}
              onChange={onChange}
              className="form-input"
              name="competition"
              id="competition"
              cols="30"
              rows="1"
            ></textarea>
          </div>

          <div className="form-div">
            <label className="form-label" htmlFor="finance">
              Financial Overview
            </label>
            <textarea
              placeholder="Input current status, projections, and budgets"
              value={formData.finance}
              onChange={onChange}
              className="form-input"
              name="finance"
              id="finance"
              cols="30"
              rows="1"
            ></textarea>
          </div>

          <div className="form-div">
            <button
              onClick={(e) => handleGenerate(e)}
              className="bg-blue-400 font-bold px-4 py-2 rounded-full text-slate-100"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessPlanForm;
