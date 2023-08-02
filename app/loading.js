'use client';

import { Player } from '@lottiefiles/react-lottie-player';
export default function Error() {
  return (
  <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="animate-linear bg-gradient-to-r from-purple-500 via-sky-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-center text-5xl font-black uppercase text-transparent">
        Order Up!
      </h1>
        <Player
        autoplay
        loop
        src="https://storage.fleek-internal.com/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/beerpour.json"
        style={{ height: '500px', width: '500px' }}
        className="m-8"
      ></Player>
    </div>
    </div>
    </div>
  );
}
