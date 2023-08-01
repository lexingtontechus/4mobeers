"use client";
import Link from "next/link";

const Footer = () => (
  <div className="btm-nav px-8 py-4">
    <div className="mx-auto mt-5 grid max-w-screen-xl grid-cols-1 gap-10 border-t border-secondary-700 pt-2 dark:border-secondary-700">
      <div className="w-full text-center">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()}
          <span className="px-2">
            <Link
              href="/terms"
              className="text-sm"
            >
              Terms
            </Link>
          </span>
          <span className="px-2">
            <Link
              href="/privacy"
              className="text-sm"
            >
              Privacy
            </Link>
          </span>
          <span className="px-2">
            <Link
              href="/support"
              className="text-sm"
            >
              Support
            </Link>
          </span>
        </p>
      </div>
    </div>
  </div>
);
export default Footer;
