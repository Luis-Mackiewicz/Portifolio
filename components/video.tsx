import MobileImage from "@/public/images/home-mobile-image.jpg";
import Image from "next/image";

export function Video() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden lg:hidden">
        <Image
          src={MobileImage}
          alt="Programing image"
          fill
          className="object-cover opacity-60"
        />
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        className="hidden lg:block h-3/4 w-4/5 max-w-none rounded-3xl object-cover pointer-events-none select-none opacity-60"
      >
        <source src="/video/coding-video.webm" type="video/webm" />
        <source src="/video/coding-video.mp4" type="video/mp4" />
      </video>
    </>
  );
}
