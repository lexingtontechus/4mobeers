'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
export default function NotFound({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div classsName="relative flex flex-col justify-center overflow-hidden m-8">
      <h1 className="animate-linear bg-gradient-to-r from-truePurple-500 via-trueSky-500 to-truePink-500 bg-[length:200%_auto] bg-clip-text text-center text-5xl font-black uppercase text-transparent">
        &quot;We haven't had that spirit here since 1969&quot;
      </h1>
      <Player
        autoplay
        loop
        src="https://storage.fleek-internal.com/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/coffeespill.json"
        style={{ height: '500px', width: '500px' }}
        className="m-8"
      ></Player>
           <div className="mx-auto w-full text-center">
          <button className="btn-primary glass btn rounded-md uppercase text-base-content mr-3">
            <Link href="/">HOME</Link>
          </button>
        </div>
    </div>
  );
}
