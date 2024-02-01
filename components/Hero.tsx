import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const splineRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (splineRef.current) {
      observer.observe(splineRef.current);
    }
    return () => {
      if (splineRef.current) {
        observer.unobserve(splineRef.current);
      }
    };
  }, []);

  return (
    <div
      className="h-full w-full flex flex-col items-center"
      style={{
        alignItems: "center",
        textAlign: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3em",
            color: "white",
            textShadow: "0 0 2px #ffffff, 0 0 4px #ffffff",
          }}
        >
          Yeager GmbH
        </h1>
        <div ref={splineRef}>
          <Spline
            style={{}}
            scene="https://prod.spline.design/AYItJrbMLHQRViW0/scene.splinecode"
          />
        </div>
        {isInView && (
          <div className="fixed bottom-4 right-4">
            <button
              style={{
                color: "white",
                fontSize: "1.5em",
                padding: "10px",
                borderRadius: "50%",
                textShadow: "0 0 10px #ffffff",
                transition: "text-shadow 0.3s ease",
                outline: "none",
              }}
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
              title="Scroll Down"
            >
              About Us
            </button>
          </div>
        )}
        <div className="">
          <TypeAnimation
            className=""
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
            style={{
              marginTop: "10%",
              alignSelf: "center",
              textAlign: "center",
              fontSize: "4em",
              display: "inline-block",
              color: "white",
              textShadow: "0 0 2px #ffffff, 0 0 4px #ffffff",
            }}
            repeat={Infinity}
          />

          <h1
            style={{
              textAlign: "center",
              fontSize: "2em",
              marginBottom: "200px",
            }}
          >
            Our team is fully engaged in our current internal projects, each
            member passionately striving for innovation and excellence. At this
            time, we are dedicated to maximizing our efforts on these
            initiatives and are not taking on new projects. Thank you for your
            understanding.
          </h1>
        </div>
      </div>
    </div>
  );
}
