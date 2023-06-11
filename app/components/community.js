'use client';
import SectionTitle from '../components/sectionTitle';

//import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

const Community = () => (
  <div id="community" className="m-8">
    <h1 className="animate-linear bg-gradient-to-r from-trueEmerald-500 via-trueRed-500 to-trueEmerald-500 bg-[length:200%_auto] bg-clip-text text-center text-5xl font-black uppercase text-transparent">
      Community
    </h1>

    <SignedIn>
      <SectionTitle
        pretitle="Welcome To The Community"
        title="Join Our Discord"
      >
        Update your profile to receive exclusive airdrops & offerings. Find
        other members in our Discord.
      </SectionTitle>
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-base-200 px-7 py-7 lg:flex-nowrap lg:px-12 lg:py-12">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="uppercas text-2xl font-medium lg:text-3xl">
            Join Our Discord
          </h2>
        </div>
        <div className="mx-auto flex-shrink-0 text-center lg:w-auto">
          <div className="button primary bg-secondary-700 relative mx-auto inline-block w-full rounded-md uppercase">
            <Link
              href="https://discord.gg/d6KnD7V2gs"
              target="_blank"
              rel="noreferrer"
            >
              <button className="semibold btn-primary glass btn rounded-md uppercase text-base-content">
                DISCORD
              </button>
            </Link>
          </div>
        </div>
      </div>
    </SignedIn>

    <SignedOut>
      <SectionTitle
        pretitle="Join The Community"
        title="Exclusive Access"
        id="community"
      >
        Connect your wallet. Sign In. Update your profile to receive exclusive
        airdrops & offerings.
      </SectionTitle>
      <div className="bg-primary-100 text-primary-700 mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-base-200 px-7 py-7 lg:flex-nowrap lg:px-12 lg:py-12">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium uppercase lg:text-3xl">
            Join Our Community
          </h2>
        </div>
        <div className="mx-auto flex-shrink-0 text-center lg:w-auto">
          <div className="relative mx-auto inline-block w-full rounded-md font-black uppercase">
            <SignInButton
              mode="modal"
              afterSignInUrl="/user"
              afterSignUpUrl="/user"
            >
              <button className="semibold btn-primary glass btn rounded-md uppercase text-base-content">
                CONNECT
              </button>
            </SignInButton>
          </div>
        </div>
      </div>
    </SignedOut>
  </div>
);

export default Community;
