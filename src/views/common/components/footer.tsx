"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-zinc-400 text-sm mb-6 md:mb-0">
          &copy; {new Date().getFullYear()} Rock Can Code. All rights reserved.
        </div>

        <nav className="flex gap-6 text-zinc-400">
          <Link
            href="/privacy"
            className="hover:text-zinc-100 duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-zinc-100 duration-200"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="hover:text-zinc-100 duration-200"
          >
            Contact
          </Link>
        </nav>

        <div className="flex gap-6">
          {/*
          <Link
            href="https://x.com/yourusername"
            className="text-zinc-400 hover:text-zinc-100 duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/x.svg" alt="X" className="text-2xl" width={48} height={48} />
          </Link>*/}
          <Link
            href="https://www.linkedin.com/company/rock-can-code"
            className="text-zinc-400 hover:text-zinc-100 duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/linkedin-icon.svg" alt="LinkedIn" className="text-2xl" width={48} height={48} />
          </Link>
          {/*
          <Link
            href="https://youtube.com/c/yourchannel"
            className="text-zinc-400 hover:text-zinc-100 duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/yt.svg" alt="YouTube" className="text-2xl" width={48} height={48} />
          </Link>*/}
        </div>
      </div>
    </footer>
  );
}
