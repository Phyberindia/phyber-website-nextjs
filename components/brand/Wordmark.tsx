// app/components/brand/Wordmark.tsx
import Image from "next/image";

export default function Wordmark({ height = 20 }: { height?: number }) {
  return (
    <div className="flex items-center min-w-0">
      {/* IMAGE: Wordmark */}
      {/* PATH: /public/images/brand/phyber-wordmark.png */}
      <Image
        src="/images/brand/phyber-wordmark.png"
        alt="Phyber Wordmark"
        width={120}
        height={height}
        className="h-5 md:h-6 w-auto object-contain"
        priority
      />
    </div>
  );
}
