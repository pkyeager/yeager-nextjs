/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const logoPath = "/yeager-logo.png";
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-10">
        <img
          src={logoPath}
          alt="Yeager GmbH"
          className="w-1/6 object-contain hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-lg"
        />
        <div className="flex w-full h-full items-center justify-center shadow-lg">
          <Spline scene="https://prod.spline.design/AYItJrbMLHQRViW0/scene.splinecode" />
        </div>

        <div className="text-center">
          <TypeAnimation
            className="mt-10 self-center text-4xl shadow-md"
            sequence={[
              "We are Problem Solvers.",
              1000,
              "We are a Team of Software Engineers.",
              1000,
              "We are a Team of Fullstack Developers.",
              1000,
              "We are a Team of Designers.",
              1000,
              "We are Yeager GmbH.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

          <h1 className="text-xl mt-10 w-1/2 mx-auto">
            Our team is currently fully engaged in our current internal
            projects, each member passionately striving for innovation and
            excellence. At this time, we are dedicated to maximizing our efforts
            on these initiatives and are not taking on new projects. Thank you
            for your understanding.
          </h1>
        </div>
      </div>
    </div>
  );
}
