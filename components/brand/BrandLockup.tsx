// app/components/brand/BrandLockup.tsx
import Link from "next/link";
import Logo from "./Logo";
import Wordmark from "./Wordmark";

export default function BrandLockup() {
  return (
    <Link
      href="/home"
      className="flex items-center gap-2 flex-shrink-0 min-w-0"
    >
      <Logo />
      <span className="hidden sm:inline-flex">
        <Wordmark />
      </span>
    </Link>
  );
}
