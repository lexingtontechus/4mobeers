'use client';
import React from 'react';
import SectionTitle from './sectionTitle';
import PartnerModal from './partners/partnermodal';

const Partner = () => (
  <div id="partners" className="m-8">
    <h1 className="animate-linear bg-gradient-to-r from-purple-500 via-amber-500 to-purple-500 bg-[length:200%_auto] bg-clip-text text-center font-black uppercase text-transparent text-5xl">
      Partners
    </h1>
    <SectionTitle pretitle="Become A Partner" title="Join Our NIL Program">
      Partner with the 4MoBeers Community and create your own 4MoBeers NFT
      Collectibles Edition using the Name Image & Likeness (NIL) of your company
      and/or your staff.
    </SectionTitle>
    <div className="bg-base-200 mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl px-7 py-7 lg:flex-nowrap lg:px-12 lg:py-12">
      <div className="flex-grow text-center lg:text-left">
        <div>
          <h2 className="text-2xl font-medium uppercase lg:text-3xl">
            Join Our Program
          </h2>
        </div>
      </div>
      <div className="mx-auto flex-shrink-0 text-center lg:w-auto">
        <PartnerModal />
      </div>
    </div>
  </div>
);
export default Partner;
