"use client";
import MobileImage from "@/public/home-mobile-image.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { div } from "three/src/nodes/math/OperatorNode.js";

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
      <div>
        <Image
          src={MobileImage}
          alt="Programing image"
          className="w-auto h-auto rounded-4xl "
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
      <source src="/coding-video.mp4" type="video/mp4" />
    </video>
  );
}
