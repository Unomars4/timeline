import { RefObject } from "react";
import { Timeline, TimelineObj } from "../../types";
import EpisodeCard from "./episode-card";

type EpisodeListProps = {
  data: Timeline;
  audioRef: RefObject<HTMLAudioElement | null>;
  selectedItemHandler: (obj: TimelineObj) => void;
};

function EpisodeList({
  data,
  audioRef,
  selectedItemHandler,
}: EpisodeListProps) {
  if (!audioRef || !data) return null;
  return (
    <div className="w-full flex gap-x-2 overflow-x-scroll">
      {data.map((item) => {
        return (
          <EpisodeCard
            item={item}
            audioRef={audioRef}
            selectedItemHandler={selectedItemHandler}
          />
        );
      })}
    </div>
  );
}

export default EpisodeList;
