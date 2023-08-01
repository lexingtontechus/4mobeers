'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="animate-linear bg-gradient-to-r from-purple-500 via-sky-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-center text-5xl font-black uppercase text-transparent">
            Someone Spilled Their Drink!
          </h1>
          <Player
            autoplay
            loop
            src="https://storage.fleek-internal.com/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/coffeespill.json"
            className="m-8 max-h-[500px] max-w-[500px]"
          ></Player>
          <div className="mx-auto w-full text-center">
            <button className="btn-primary glass btn rounded-md mr-3 uppercase text-base-content">
              <Link href="/">HOME</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
