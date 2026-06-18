"use client";
import MobileImage from "@/public/home-mobile-image.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Video() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isDesktop) {
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src={MobileImage}
          alt="Programing image"
          fill
          className="object-cover opacity-60"
        />
      </div>
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      className="
            
      h-3/4
      w-4/5
      max-w-none
      rounded-3xl
      object-cover
      pointer-events-none
      select-none
      opacity-60
    "
    >
      <source src="/coding-video.webm" type="video/webm" />
      <source src="/coding-video.mp4" type="video/mp4" />
    </video>
  );
}
