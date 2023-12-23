'use client'
import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import rtulogo from '../assets/rtuLogo.png'
import tharlogo from '../assets/tharLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useCallback(
    name => {
      router.push(name)
      setIsOpen(false)
    },
    [router],
  )

  return (
    <div className={`navbar absolute top-0 right-0 z-30 bg-opacity-80 hover:bg-opacity-90`}>
      <div className="flex flex-col">
        <div className="lg:hidden md:hidden absolute top-0 right-0 m-5">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Collapsible menu for mobile */}
      {isOpen && (
        <nav className="lg:hidden md:hidden">
          <ul className="flex flex-col gap-3 backdrop:blur-md top-0 right-0 bg-black h-screen w-screen justify-center items-center">
            <li>
              <button onClick={() => navigate('/gokart')}>HOME</button>
            </li>
            <li>
              <button onClick={() => navigate('#')}>LINK</button>
            </li>
            <li>
              <button onClick={() => navigate('#')}>LINK</button>
            </li>
            <li>
              <button onClick={() => navigate('#')}>LINK</button>
            </li>
            <li>
              <button onClick={() => navigate('#')}>LINK</button>
            </li>
            <li>
              <button onClick={() => navigate('/')}>Go Back</button>
            </li>
          </ul>
        </nav>
      )}

      {/* for larger screens */}
      <nav className="hidden justify-between w-full lg:flex lg:items-center lg:m-4 md:flex md:items-center md:ml-4">
        <div>
          <Image alt="" src={rtulogo} height={60} width={60} />
        </div>
        <ul className="border flex justify-evenly gap-10 w-3/4 rounded-full font-bold bg-[#00000052] p-5">
          {/* <li>
            <button
              onClick={() => navigate('/')}
              className="border border-black rounded-lg p-2 text-black hover:bg-slate-300 hover:text-black transition-all duration-500 bg-[#dce0e8] shadow-gray-900 shadow-sm font-medium"
            >
              <div className="flex justify-center place-items-baseline gap-2 items-center">
                <h4 className="">Go Back</h4>
              </div>
            </button>
          </li> */}
          <li>
            <button onClick={() => navigate('/gokart')} className="text-[#ff6b00]">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => navigate('#')}>LINK</button>
          </li>
          <li>
            <button onClick={() => navigate('#')}>LINK</button>
          </li>
          <li>
            <button onClick={() => navigate('#')}>LINK</button>
          </li>
          <li>
            <button onClick={() => navigate('#')}>LINK</button>
          </li>
          <li>
            <button onClick={() => navigate('#')}>LINK</button>
          </li>
          <li>
            <button onClick={() => navigate('#')}>LINK</button>
          </li>
        </ul>
        <Image alt="" src={tharlogo} height={60} width={60} />
      </nav>
    </div>
  )
}
