import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-[var(--bg)] min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <div className="text-[var(--accent)] font-bold text-9xl mb-6 opacity-20">404</div>
      <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">Page Not Found</h2>
      <p className="text-[var(--ink-muted)] mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
}
