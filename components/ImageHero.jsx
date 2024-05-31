'use client';
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ImageHero() {
  return (
    <AspectRatio
      ratio={24 / 4}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src="/equipo.jpg"
          alt="Logo"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="rounded-r-lg"
        />
      </div>
    </AspectRatio>
  );
}
