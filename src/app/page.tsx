"use client";

import { useEffect, useState } from "react";
import Hero from "./components/hero";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }),
    [];

  if (isLoading) {
    return <h1>...</h1>;
  }

  return (
    <main className="flex w-full h-full bg-gray-950 items-center text-center flex-col">
      <AnimatedCursor color="255, 255, 255" />
      <Hero />
      <Footer />
    </main>
  );
}
