'use client'

import { useState } from 'react'

export default function Component() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div className="relative flex h-screen w-screen items-center justify-center bg-black">
        <div
          className="relative h-[110px] w-[655px] rounded-xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Static gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-transparent" />

          {/* Animated gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#00EDFF] via-white transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Content container */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-transparent p-[1px]">
            <div className="h-full w-full rounded-xl bg-black p-2">
              <h1 className="text-2xl text-white">asdfasd</h1>
              <h1 className="text-2xl text-white">asdfasd</h1>
            </div>
          </div>

          {/* Hover effect overlay */}
          <div
            className={`absolute inset-0 rounded-xl bg-transparent p-[2px] transition-all duration-300 ${
              isHovered ? 'card-hover' : ''
            }`}
          />
        </div>
      </div>

      <style jsx>{`
        .card-hover {
          background: radial-gradient(
              72.29% 50.93% at 49.92% 106.94%,
              rgba(0, 237, 255, 0.1) 0%,
              rgba(0, 237, 255, 0) 100%
            ),
            radial-gradient(
              92.95% 92.95% at 49.92% -60.26%,
              rgba(255, 255, 255, 0.01) 0%,
              rgba(255, 255, 255, 0) 72.02%
            );
        }
      `}</style>
    </>
  )
}