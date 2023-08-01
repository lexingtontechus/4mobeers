'use client';
import SectionTitle from './sectionTitle';

//import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

const Community = () => (
  <main className="justify-center">
    {/* <SignedOut>
      <div className="min-h-96 text-center">
        <div className="max-w-lg">
          <h1 className="animate-linear bg-gradient-to-r from-emerald-500 via-red-500 to-emerald-500 bg-[length:200%_auto] bg-clip-text text-center text-5xl font-black uppercase text-transparent">
            Community
          </h1>
          <h2 className="py-6">
            Join The Community</h2>
            <h2 className="py-6">Exclusive Access</h2>
           <p className="py-6">
          Connect your wallet. Sign In. Update your profile to receive exclusive
        airdrops & offerings.</p>
          <SignInButton
            mode="modal"
            afterSignInUrl="/user"
            afterSignUpUrl="/user"
          >
            <button className="btn-primary glass btn rounded-md font-semibold uppercase text-base-content">
              CONNECT
            </button>
          </SignInButton>
        </div>
      </div>
    </SignedOut>*/}
    <div id="community" className="mx-8 my-4">
      <h1 className="animate-linear bg-gradient-to-r from-emerald-500 via-red-500 to-emerald-500 bg-[length:200%_auto] bg-clip-text text-center text-5xl font-black uppercase text-transparent">
        Community
      </h1>
      <SectionTitle
        pretitle="Welcome To The Community"
        title="Join Our Discord"
      >
        Where the Beerverse & Roadie community comes together to celebrate the love of beer.
      </SectionTitle>
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-base-200 px-7 py-7 lg:flex-nowrap lg:px-12 lg:py-12">
        <div className="flex-grow text-center lg:text-left">
          <div>
            <h2 className="text-2xl font-medium uppercase lg:text-3xl">
              4MoBeers Discord
            </h2>
          </div>
        </div>
        <div className="mx-auto flex-shrink-0 text-center lg:w-auto">
          <button className="btn-primary glass btn rounded-md font-semibold uppercase text-base-content">
            <Link
              href="https://discord.gg/d6KnD7V2gs"
              target="_blank"
              rel="noreferrer"
            >
              DISCORD
            </Link>
          </button>
        </div>
      </div>
    </div>
  </main>
);

export default Community;
