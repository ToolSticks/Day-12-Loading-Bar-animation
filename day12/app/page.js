'use client'

import React from 'react';
// Removed the Image import since it's not used in this example
// import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-1/2 h-6 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-blue-900 animate-loading"></div>
        </div>
      </div>
    </main>
  );
}
