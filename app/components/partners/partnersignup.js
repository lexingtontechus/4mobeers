'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from"next/link";
import { Player } from '@lottiefiles/react-lottie-player';

export default function ParterSignup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  //const supabase = Supabase;
  const supabase = useSupabaseClient();

  const onSubmit = //async (companyName, clientName, Email) => {
    async function createPartner(
      companyname,
      email,
      clientname,
      contactnumber,
      website,
      businesstype,
    ) {
      try {
        const registerPartner = {
          companyname,
          email,
          clientname,
          contactnumber,
          website,
          businesstype,
          updated_at: new Date().toISOString(),
        };

        let { error } = await supabase
          .from('partners')
          .insert(
            companyname,
            email,
            clientname,
            contactnumber,
            website,
            businesstype,
          );
        if (error) throw error;
        //alert("Whitelist updated!");
      } catch (error) {
        //alert("Error updating the data!");
        console.log(error);
        setIsSuccess(false);
      } finally {
        //setLoading(false);
        setIsSuccess(true);

        reset();
      }
    };

  return (
    <div className="mx-auto flex w-full flex-wrap place-content-center rounded-md">
      <div className="left-0 flex  h-full w-full flex-col overflow-hidden">
        <div className="h-full flex-grow overflow-auto">
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div id="companyname" className="mb-4 px-4">
                <label
                  htmlFor="companyname"
                  className="mb-2 block text-sm text-pink-600"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyname"
                  placeholder="Greatest Brew Co."
                  {...register('companyname', {
                    required: 'Company name is required',
                    maxLength: 80,
                  })}
                  className={`w-full rounded-md border border-secondary bg-primary px-3 py-2 placeholder-secondary focus:outline-none focus:ring   ${
                    errors.companyname
                      ? 'border-error ring-error focus:border-error'
                      : 'border-secondary ring-secondary focus:border-secondary'
                  }`}
                />
                {errors.companyname && (
                  <div className="invalid-feedback mt-1 text-sm text-error">
                    {errors.companyname.message}
                  </div>
                )}
              </div>

              <div id="email" className="mb-4 px-4">
                <label
                  htmlFor="Email"
                  className="mb-2 block text-sm text-pink-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="Email"
                  {...register('email', {
                    required: 'Enter your email',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                  placeholder="brewbuddy@company.com"
                  className={`w-full rounded-md border border-secondary bg-primary px-3 py-2 placeholder-secondary focus:outline-none focus:ring   ${
                    errors.email
                      ? 'border-error ring-error focus:border-error'
                      : 'border-secondary ring-secondary focus:border-secondary'
                  }`}
                />

                {errors.email && (
                  <div className="invalid-feedback mt-1 text-sm text-error">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div id="clientname" className="mb-4 px-4">
                <label
                  htmlFor="clientName"
                  className="mb-2 block text-sm text-pink-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="clientname"
                  placeholder="Brew Buddy"
                  {...register('clientname', {
                    required: 'Your full name is required',
                    maxLength: 80,
                  })}
                  className={`w-full rounded-md border border-secondary bg-primary px-3 py-2 placeholder-secondary focus:outline-none focus:ring   ${
                    errors.clientname
                      ? 'border-error ring-error focus:border-error'
                      : 'border-secondary ring-secondary focus:border-secondary'
                  }`}
                />
                {errors.clientname && (
                  <div className="invalid-feedback mt-1 text-sm text-error">
                    {errors.clientname.message}
                  </div>
                )}
              </div>

              <div id="contactnumber" className="mb-4 px-4">
                <label
                  htmlFor="contactnumber"
                  className="mb-2 block text-sm text-pink-600"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactnumber"
                  placeholder="000-000-0000"
                  {...register('contactnumber', {
                    required:
                      'Please enter your contact number e.g.000-000-0000 ',

                    min: 12,
                    maxLength: 12,
                    pattern: /^\S+-\S+-\S/i,
                  })}
                  className={`w-full rounded-md border border-secondary bg-primary px-3 py-2 placeholder-secondary focus:outline-none focus:ring   ${
                    errors.contactnumber
                      ? 'border-error ring-error focus:border-error'
                      : 'border-secondary ring-secondary focus:border-secondary'
                  }`}
                />
                {errors.contactnumber && (
                  <div className="invalid-feedback mt-1 text-sm text-error">
                    {errors.contactnumber.message}
                  </div>
                )}
              </div>

              <div id="website" className="mb-4 px-4">
                <label
                  htmlFor="website"
                  className="mb-2 block text-sm text-pink-600"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="greatestbrew.co"
                  {...register('website', {
                    required:"Please enter the company's website URL",
                    maxLength: 80,
                    pattern: /^\S+.\S/i,
                  })}
                  className={`w-full rounded-md border border-secondary bg-primary px-3 py-2 placeholder-secondary focus:outline-none focus:ring   ${
                    errors.website
                      ? 'border-error ring-error focus:border-error'
                      : 'border-secondary ring-secondary focus:border-secondary'
                  }`}
                />
                {errors.website && (
                  <div className="invalid-feedback mt-1 text-sm text-error">
                    {errors.website.message}
                  </div>
                )}
              </div>

              <div id="businesstype" className="mb-4 px-4">
                <label
                  htmlFor="businesstype"
                  className="mb-2 block text-sm text-pink-600"
                >
                  Business Type
                </label>
                <select
                  {...register('businesstype', {
                    required: 'Please select a type of business',
                  })}
                  className={`w-full rounded-md border border-secondary bg-primary px-3 py-2 placeholder-secondary focus:outline-none focus:ring   ${
                    errors.businesstype
                      ? 'border-error ring-error focus:border-error'
                      : 'border-secondary ring-secondary focus:border-secondary'
                  }`}
                >
                  <option value="default">Select An Option</option>
                  <option value="Bar">Bar</option>
                  <option value="Brewery">Brewery</option>
                  <option value="Club">Club</option>
                  <option value="Distillery">Distillery</option>
                  <option value="Food Truck">Food Truck</option>
                  <option value="Pub">Pub</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Vineyard">Vineyard</option>
                  <option value="Content Creator">Content Creator</option>
                  <option value="Other">Other</option>
                </select>

                {errors.businesstype && (
                  <div className="invalid-feedback mt-1 text-sm text-error">
                    {errors.businesstype.message}
                  </div>
                )}
              </div>

              <div className="mx-auto mt-8 px-4">
                <button
                  type="submit"
                  className="btn btn-primary rounded-md glass semibold uppercase text-base-content px-2 py-2"
                >
                  {isSubmitting ? (
                    <svg
                      className="mx-auto h-5 w-5 animate-spin text-info"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    'REGISTER'
                  )}
                </button>
              </div>
            </form>
          )}

          {isSubmitSuccessful && isSuccess && (
            <>
              <div className="flex h-full flex-col items-center justify-center rounded-md text-center">
                <Player
                  autoplay
                  loop
                  src="https://storage.fleek-internal.com/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/drunkbeerbottlegreen.json"
                  style={{ height: '100px', width: '100px' }}
                ></Player>
                <h3 className="py-5 text-xl text-success">
                  Partner request sent successfully!
                </h3>
                <h2 className="py-2 text-xl">
                  Join Our Partners Discord Channel
                </h2>

                <Link
                  href="https://discord.gg/VpUvAbaenh"
                  alt="Discord"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <button
                    className="btn btn-primary rounded-md glass semibold uppercase text-base-content p-2"
                  >
                    <Discord className="mr-3"/>
                    Discord
                  </button>
                </Link>
              </div>
            </>
          )}

          {isSubmitSuccessful && !isSuccess && (
            <div className="flex h-full flex-col items-center justify-center rounded-md text-center">
              <Player
                autoplay
                loop
                src="https://storage.fleek-internal.com/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/drunkbeerbottlered.json"
                style={{ height: '100px', width: '100px' }}
              ></Player>

              <h3 className="py-7 text-xl text-error">
                Oops, We Spilled Your Drink! PLease Try Again.
              </h3>

              <button
                className="btn btn-primary rounded-md glass semibold uppercase text-base-content mx-auto p-2"
                onClick={() => reset()}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Discord() {
  return ( 
<svg height="1em" viewBox="0 0 640 512">
<path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
</svg>
  );}