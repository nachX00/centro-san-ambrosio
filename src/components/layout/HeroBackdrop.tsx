"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function allowMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;
  return !connection?.saveData;
}

export function HeroBackdrop() {
  const play = useSyncExternalStore(subscribe, allowMotion, () => false);

  return (
    <div className="absolute inset-0 opacity-55" aria-hidden>
      <Image
        src="/brand/hero-huasco.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      {play ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/brand/hero-huasco.jpg"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/brand/hero-huasco.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
