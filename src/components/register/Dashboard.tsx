'use client'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UserDashboard({ caData }: { caData: any }) {
  return (
    <section className="min-h-screen w-full max-w-[75rem] mx-auto mt-36">
      <div
        className="bg-white/20"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div
          className="bg-black/50 flex flex-col items-center"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <div className="w-full flex flex-wrap items-center justify-center p-4 py-6 gap-x-12">
            <div className="h-24 aspect-square rounded-full overflow-hidden">
              <Image
                src={caData.image}
                height={100}
                width={100}
                loading="lazy"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center md:items-start justify-center">
              <div className="text-center">
                {/* <h5>Name</h5> */}
                <h2 className="">
                  {caData.name} ({caData.tharID})
                </h2>
              </div>
              <div className="text-center">
                {/* <h5>Email</h5> */}
                <h4 className="">{caData.email}</h4>
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

          <div role="tablist" className="tabs tabs-boxed font-bold mb-2">
            <a role="tab" className="tab tab-active">
              Competitions
            </a>
            <a role="tab" className="tab">
              Events
            </a>
          </div>

          <div className="overflow-x-auto min-w-full md:px-8">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Event Name</th>
                  <th>Team Name</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {/* <tr>
                  <th>1</th>
                  <td>TGKC</td>
                  <td>ANIGAR</td>
                  <td>Done</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          <div className="h-48 flex items-center justify-center flex-col">
            <span>No Events?</span>
            <Link href={'/#events'} className="link">
              Choose One
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
