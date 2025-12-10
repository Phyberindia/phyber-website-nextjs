// app/components/brand/Logo.tsx
import Image from "next/image";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center flex-shrink-0">
      {/* IMAGE: Main app logo */}
      {/* PATH: /public/images/brand/Favicon.png (or logo.png if you rename later) */}
      <Image
        src="/images/brand/Favicon.png"
        alt="Phyber Logo"
        width={size}
        height={size}
        className="h-8 w-8 md:h-9 md:w-9 object-contain"
        priority
      />
    </div>
  );
}
