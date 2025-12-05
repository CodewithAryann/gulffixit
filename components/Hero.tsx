"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const images = [
    "/images/hero/hero-img-1.png",
    "/images/hero/hero-img-6.png",
    "/images/hero/hero-img-7.png",
    "/images/hero/hero-img-8.png",
    "/images/hero/hero-img-9.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Slideshow WITH FADE ANIMATION */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 w-full h-full transition-opacity duration-1500 ease-out
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
        >
          <Image
            src={img}
            alt={`Hero image ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6 text-left">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
          Keeping Your Spaces <span className="text-red-600">Pristine</span>
          <br /> With Expert Maintenance Solutions
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mt-4 leading-relaxed">
          We ensure your spaces are kept in top-notch condition with skilled
          technicians ready to tackle any repair or maintenance task — <br />
          <span className="text-red-600 font-semibold">
            anywhere, anytime in Dubai.
          </span>
        </p>

        <div>
          <Link
            href="/get-estimate"
            className="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300"
          >
            Get a FREE Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
