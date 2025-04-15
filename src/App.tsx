import { useEffect, useRef, useState } from "react";
import { getApiData } from "./lib/api";
import { Timeline, TimelineObj } from "./types";
import AudioPlayer from "./components/player";
import TrackCard from "./components/track-card";
import EpisodeList from "./components/episode-list";
import CenteredLayout from "./components/layouts/centered-layout";
import MainLayout from "./components/layouts/main-layout";

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
    <MainLayout>
      <CenteredLayout>
        <div>
          <h1 className="text-8xl">Timeline</h1>
          <AudioPlayer ref={audioRef} audioPath={selectedItem.Audio} />
          <TrackCard
            iconPath={selectedItem.Icon}
            trackTitle={selectedItem.Title}
            trackEpisode={selectedItem.Episode}
          />
        </div>
        <div className="flex justify-between">
          <EpisodeList
            data={timeline}
            audioRef={audioRef}
            selectedItemHandler={setSelectedItem}
            selectedId={selectedItem.Id}
          />
        </div>
      </CenteredLayout>
    </MainLayout>
  );
}

export default App;
