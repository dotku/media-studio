"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function Home() {
  const [startedTime, setStartedTime] = useState(0);
  const [endTime, setEndTime] = useState(60);
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {}, []);

  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <div className="h-[720px]">
          <video
            ref={playerRef}
            src={`/assets/videos/snowy_moutain.mp4#t=${startedTime},${endTime}`}
            loop
            className="w-full rounded-[24px] my-5"
          />
        </div>
        <div className="w-full max-w-xs gap-3 flex flex-col mt-5">
          <label>Started Time</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={startedTime}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setStartedTime(Number(e.currentTarget.value))
            }
          />
          <label>End Time</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={endTime}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setEndTime(Number(e.currentTarget.value))
            }
          />
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              playerRef.current?.play();
            }}
          >
            Play
          </button>
        </div>
      </div>
    </main>
  );
}
