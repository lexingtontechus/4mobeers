'use client';
import PartnerSignup from './partnersignup';

export default function PartnerModal() {
  return (
    <>
      <div className="relative mx-auto inline-block w-full rounded-md font-black uppercase">
    {/* Open the modal using ID.showModal() method */}
<button className="btn btn-primary glass semibold uppercase rounded-md text-base-content" onClick={()=>window.partnerregister.showModal()}>REGISTER</button>
<dialog id="partnerregister" className="modal rounded-md">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg uppercase text-gradient-to-r from-trueEmerald-500 via-trueZinc-900 to-trueBlue-500 bg-[length:200%_auto] bg-clip-text mb-2">
      Partners NIL Program</h3>
     <PartnerSignup />
    <div className="modal-action">
      <button className="btn btn-primary glass rounded-md">CLOSE</button>
    </div>
  </form>
</dialog>
    </div>
        </>
  );
}
