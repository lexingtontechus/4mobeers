'use client';
import PartnerSignup from './partnersignup';

export default function PartnerModal() {
  return (
    <>
      <div className="relative mx-auto inline-block w-full rounded-xl font-black uppercase">
    {/* Open the modal using ID.showModal() method */}
<button className="btn btn-primary glass semibold uppercase rounded-md text-base-content" onClick={()=>window.partnerregister.showModal()}>REGISTER</button>
<dialog id="partnerregister" className="modal rounded-md">
  <form method="dialog" className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg uppercase text-gradient-to-r from-emerald-500 via-zinc-900 to-blue-500 bg-[length:200%_auto] bg-clip-text mb-2">
      Partners NIL Program</h3>
     <PartnerSignup />
  </form>
</dialog>
    </div>
        </>
  );
}
