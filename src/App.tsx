import { useEffect, useRef, useState } from "react";
import { getApiData } from "./lib/api";
import { Timeline, TimelineObj } from "./types";

function App() {
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [selectedItem, setSelectedItem] = useState<TimelineObj | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    async function fetchTimelineData() {
      const data = await getApiData();
      setTimeline(data);
      if (!selectedItem && timeline) {
        setSelectedItem(timeline[0]);
      }
    }

    fetchTimelineData();
  }, [timeline]);

  if (!timeline || !selectedItem) return <p>Loading...</p>;

  return (
    <main className="font-inter relative -z-0 min-h-screen min-w-screen flex justify-center">
      <div className="w-4/5 h-[600px] m-auto flex flex-col justify-between">
        <div>
          <h1 className="text-8xl">Timeline</h1>
          <audio
            controls
            controlsList="nodownload noplaybackspeed"
            ref={audioRef}
          >
            <source
              src={`https://arthurfrost.qflo.co.za/${selectedItem.Audio}`}
            />
          </audio>
          <div className="flex gap-x-3 mt-5">
            <img
              className="w-[50px] h-[50px] object-fill rounded-lg border-solid border-gray-700"
              src={`https://arthurfrost.qflo.co.za/${selectedItem.Icon}`}
              alt="Episode Cover"
            />
            <div>
              <p>{selectedItem.Title}</p>
              <p className="text-sm">Ep: {selectedItem.Episode}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-full flex gap-x-2 overflow-x-scroll">
            {timeline.map((item) => {
              return (
                <img
                  key={item.Id}
                  className="w-[40px] h-[40px] object-fill rounded-lg border-solid border-gray-700"
                  src={`https://arthurfrost.qflo.co.za/${item.Icon}`}
                  alt="Episode Cover"
                  onClick={() => {
                    setSelectedItem(item);
                    if (audioRef.current) {
                      audioRef.current.src = `https://arthurfrost.qflo.co.za/${item.Audio}`;
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
