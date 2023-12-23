'use client'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export default function Dashboard({ caData }: { caData: any }) {
  return (
    <section className="min-h-screen w-full max-w-[75rem] mx-auto mt-36">
      <div
        className="bg-white/20"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div
          className="bg-black/50 flex flex-col lg:flex-row items-center"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <div className="md:w-3/12 flex flex-col items-center p-4 py-6 gap-4">
            <div className="h-48 aspect-square rounded-full overflow-hidden">
              <Image
                src={caData.image}
                height={200}
                width={200}
                loading="lazy"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="text-center">
                {/* <h5>Name</h5> */}
                <h4 className="underline underline-offset-2">{caData.name}</h4>
              </div>
              <div className="text-center">
                {/* <h5>Email</h5> */}
                <h4 className="underline underline-offset-2">{caData.email}</h4>
              </div>
              <div className="text-center">
                {/* <h5>Phone</h5> */}
                <h4 className="underline underline-offset-2">{caData.phone}</h4>
              </div>
              <div className="text-center">
                {/* <h5>College Name</h5> */}
                <h4 className="underline underline-offset-2">{caData.collegeName}</h4>
              </div>
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={e => {
                signOut()
              }}
            >
              Log Out
            </button>
          </div>
          <div className="md:w-8/12 flex flex-col justify-start min-h-full py-4">
            <div className="w-full grid grid-cols-2 grid-rows-1 h-36 gap-x-4">
              <div className="bg-gray-950 rounded-xl flex flex-col items-start justify-center px-8">
                <h5>CA Code</h5>
                <h3>{caData.caCode}</h3>
              </div>
              <div className="bg-gray-950 rounded-xl flex flex-col items-start justify-center px-8">
                <h5>Thar ID</h5>
                <h3>{caData.tharID}</h3>
              </div>
            </div>
            <div className="overflow-x-auto overflow-y-scroll h-96"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
