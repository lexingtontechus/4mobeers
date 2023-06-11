'use client';
import SectionTitle from '../components/sectionTitle';

export default function Faq() {
  return (
      <div id="faqs" className="my-8">
        <h1 className="animate-linear bg-gradient-to-r from-trueZinc-500 via-trueOrange-500 to-trueZinc-700 bg-[length:200%_auto] bg-clip-text text-center font-black uppercase text-transparent text-5xl">
          FAQs
        </h1>
        <SectionTitle pretitle="Ask Us Anything" title="Learn More">
          How to partner and build your community with 4MoBeers?
        </SectionTitle>

     <div className="mx-auto mt-4 flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-primary-100 p-8 text-primary-700 lg:flex-nowrap lg:px-12 lg:py-12">
          <div className="mx-auto w-full rounded-2xl">
            <div tabIndex={0} className="collapse  collapse-arrow bg-accent text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md">
              <div className="collapse-title">
              4MoBeers DAO
              </div>
              <div className="collapse-content text-xs"> 
                <p> What is the 4MoBeers DAO?</p>
                <p>Thank you for choosing to be part of our community at
                                    4MoBeers DAO Inc, doing business as 4MoBeers. We are
                                    creating a Beerverse that supports the beer community
                                    and roadie lovers. The 4MoBeers DAO will orchestrate the
                                    goverance, voting, airdrops, splits, management &
                                    security of smart contracts.</p>
                                    <p>4MoBeers will be responsible for the design & creation
                                    of each Non-Fungible Token (NFT).</p>
                                    <p>  Each NFT will be offered at a fixed price.</p>
                                    <p> Ongoing royalities will be attributed to the NIL owner
                                    only, not the DAO.</p>
                
              </div>
           </div>
          <div tabIndex={1} className="collapse  collapse-arrow bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md">
            <div className="collapse-title">
              NFT Collectibles Edition
            </div>
            <div className="collapse-content text-xs"> 
              <p>What is the 4MoBeers NFT Collectibles Edition?</p>
              <p>The 4MoBeer NFT Collectibles Edition will support the
                        Name, Image & Likeness (NIL) of nominated & voted on
                        community partners.</p>
            </div>
          </div>
           <div tabIndex={2} className="collapse  collapse-arrow bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md">
            <div className="collapse-title">
             NFT Signature Series
            </div>
            <div className="collapse-content text-xs"> 
              <p>What is the 4MoBeers NFT Signature Series?</p>
              <p>  The 4MoBeer NFT Collectibles Edition will support the
                        Name Image & Likeness (NIL) of nominated & voted on
                        community members.</p>
            </div>
          </div>    
          <div tabIndex={3} className="collapse  collapse-arrow bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md">
            <div className="collapse-title">
             Connecting A Wallet
            </div>
            <div className="collapse-content text-xs"> 
              <p> Which wallets are supported?</p>
              <p>   The dApp is integrated with Metamask along with sign-in
                        verificaton.</p>
            </div>
          </div>  
          <div tabIndex={4} className="collapse  collapse-arrow bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md">
            <div className="collapse-title">
            Partners & Collabs
            </div>
            <div className="collapse-content text-xs"> 
              <p>How do I work with 4MoBeers?</p>
              <p>We love colabs! Send us a message or Beer Us!</p>
              
            </div>
          </div>     
          <div tabIndex={5} className="collapse  collapse-arrow bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md">
            <div className="collapse-title">
             Is 4MoBeers hiring?
            </div>
            <div className="collapse-content text-xs"> 
              <p>Yes, we are growing the Beerverse community one beer for
                        the road at a time.</p>
              <p>Beer us? Send us messsage.</p>
            </div>
          </div>                              
      </div>
      </div>
  </div>
  );
}
