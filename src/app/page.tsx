"use client";

import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }
    , 200);
  }),
    [];

  if (isLoading) {
    return(
      <h1>...</h1>
    )
  }

  return (
    <main className="flex w-full h-full bg-gray-950">
      <AnimatedCursor color="255, 255, 255" />
      <section className="">
        <Hero />
      </section>
    </main>
  );
}
