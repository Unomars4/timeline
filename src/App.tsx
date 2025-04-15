import { useEffect, useState } from "react";
import { getApiData } from "./lib/api";
import { Timeline } from "./types";

function App() {
  const [timeline, setTimeline] = useState<Timeline | null>(null);

  useEffect(() => {
    async function fetchTimelineData() {
      const data = await getApiData();
      setTimeline(data);
    }

    fetchTimelineData();
  }, [timeline]);

  if (!timeline) return <p>Loading...</p>;

  return (
    <main className="overflow-x-hidden font-inter w-5xl min-h-screen mx-auto">
      <div className="flex gap-x-2">
        <img
          src={`https://arthurfrost.qflo.co.za/${timeline[0].Icon}`}
          className="w-[300px] h-[300px] rounded-md"
        />
        <div>
          <p>Title: {timeline[0].Title}</p>
          <p>Episode: {timeline[0].Episode}</p>
          <p>Description: {timeline[0].Description}</p>
          <p>Upload Date: {timeline[0].CreateDate}</p>
          <audio controls>
            <source
              src={`https://arthurfrost.qflo.co.za/${timeline[0].Audio}`}
            />
          </audio>
        </div>
      </div>
      <div className="clickable-thumbnails my-4 flex">
        <img
          className="object-cover rounded-full border-black border border-solid w-[50px] h-[50px]"
          src={`https://arthurfrost.qflo.co.za/${timeline[0].Icon}`}
        />
      </div>
    </main>
  );
}

export default App;
