'use client';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="animate-linear bg-gradient-to-r from-fuchsia-500 via-zinc-900 to-blue-500 bg-[length:200%_auto] bg-clip-text text-center text-8xl font-black uppercase text-transparent xl:text-9xl">
            4 Mo Beers!
          </h1>
          <Player
            autoplay
            loop
            src="https://storage.fleek-internal.com/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/herocheers.json"
            style={{ height: '300px', width: '300px' }}
          ></Player>{' '}
        </div>
      </div>
    </div>
  );
}
