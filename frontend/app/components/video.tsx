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
      <Image
        src={MobileImage}
        alt="Programing image"
        width={500}
        className="w-4/5 h-4/5 rounded-4xl"
      />
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
      <source src="/coding-video.mp4" type="video/mp4" />
    </video>
  );
}
