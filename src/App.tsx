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
      <div className="clickable-thumbnails flex">
        <img
          className="object-cover rounded-full border-black border border-solid w-[50px] h-[50px]"
          src={`https://arthurfrost.qflo.co.za/${timeline[0].Icon}`}
        />
      </div>
    </main>
  );
}

export default App;
