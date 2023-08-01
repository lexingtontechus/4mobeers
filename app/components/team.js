'use client';
import Image from 'next/image';

const TeamImage = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/img/${src}?w=${width}&q=${
    quality || 75
  }`;
};
const Team = () => (
  <div id="team" className="m-8">
    <h1 className=" animate-linear bg-gradient-to-r from-red-500 via-emerald-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-center text-5xl font-black uppercase text-transparent xl:text-5xl">
      Team
    </h1>
    <h2 className="text-center text-5xl font-black uppercase xl:text-6xl">
      Roadie Crew
    </h2>
    <div className="mt-8 flex flex-wrap">
      <div className="mb-12 w-full px-4 py-4 md:w-6/12 lg:mb-0 lg:w-3/12">
        <Image
        loader={TeamImage}
          alt="Beer Shark"
          src="at.png"
          width={100}
          height={100}
          className="mx-auto animate-bounce border-2 p-2 border-secondary"
        />
        <h3 className="text-center text-3xl">Mo Beers</h3>
        <p className="text-center text-2xl text-pink-600">Beer Shark</p>
        <p className="text-center text-xl">
          Web 2 - &quot;Roadie! 4 Mo Beers!&quot;{' '}
        </p>
        <p className="animate-linear bg-gradient-to-r from-red-500 via-emerald-500 to-red-500 bg-[length:200%_auto] bg-clip-text text-center text-xl text-transparent">
          WEB3 - &quot;Roadie! 4 Mo Beers!&quot;
        </p>
      </div>
      <div className="mb-12 w-full px-4 py-4 md:w-6/12 lg:mb-0 lg:w-3/12">
        <Image
          loader={TeamImage}
          src="ks.jpg"
          alt="K Monster"
          height={100}
          width={100}
          className="mx-auto animate-bounce border-2 p-2 border-secondary"
        />
        <h3 className="text-center text-3xl">K Monster</h3>
        <p className="text-center text-2xl text-pink-600">The Wrangler</p>
        <p className="text-center text-xl">
          Web 2 - &quot;Need more GBz!&quot;{' '}
        </p>
        <p className="animate-linear bg-gradient-to-r from-red-500 via-emerald-500 to-red-500 bg-[length:200%_auto] bg-clip-text text-center text-xl text-transparent">
          WEB3 - &quot;Need more Cryptoz!&quot;
        </p>
      </div>
      <div className="mb-12 w-full px-4 py-4 md:w-6/12 lg:mb-0 lg:w-3/12">
        <Image
          loader={TeamImage}
          src="ds.png"
          alt="Roadie King"
          height={100}
          width={100}
          className="mx-auto animate-bounce border-2 p-2 border-secondary"
        />
        <h3 className="text-center text-3xl">D</h3>
        <p className="text-center text-2xl text-pink-600">Roadie King</p>
        <p className="text-center text-xl">
          Web 2 - &quot;Card declined.&quot;{' '}
        </p>
        <p className="animate-linear bg-gradient-to-r from-red-500 via-emerald-500 to-red-500 bg-[length:200%_auto] bg-clip-text text-center text-xl text-transparent">
          WEB3 - &quot;Connect Wallet!&quot;
        </p>
      </div>
      <div className="mb-12 w-full px-4 py-4 md:w-6/12 lg:mb-0 lg:w-3/12">
        <Image
          loader={TeamImage}
          src="dd.jpg"
          alt="The Rock God"
          height={100}
          width={100}
          className="mx-auto animate-bounce border-2 p-2 border-secondary"
        />
        <h3 className="text-center text-3xl">The Rock God</h3>
        <p className="text-center text-2xl text-pink-600">Vibe Machine</p>
        <p className="text-center text-xl">
          Web 2 - &quot;Napster Rulez.&quot;{' '}
        </p>
        <p className="animate-linear bg-gradient-to-r from-red-500 via-emerald-500 to-red-500 bg-[length:200%_auto] bg-clip-text text-center text-xl text-transparent">
          WEB3 - &quot;NFTz!&quot;
        </p>
      </div>
    </div>
  </div>
);

export default Team;
