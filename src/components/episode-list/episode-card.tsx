import { RefObject } from "react";
import { TimelineObj } from "../../types";

type EpisodeCardProps = {
  item: TimelineObj;
  audioRef: RefObject<HTMLAudioElement | null>;
  selectedItemHandler: (obj: TimelineObj) => void;
};

function EpisodeCard({
  item,
  selectedItemHandler,
  audioRef,
}: EpisodeCardProps) {
  return (
    <img
      key={item.Id}
      className="w-[40px] h-[40px] object-fill rounded-lg border-solid border-gray-700"
      src={`https://arthurfrost.qflo.co.za/${item.Image}`}
      alt="Episode Cover"
      onClick={() => {
        selectedItemHandler(item);
        if (audioRef.current) {
          audioRef.current.src = `https://arthurfrost.qflo.co.za/${item.Audio}`;
        }
      }}
    />
  );
}

export default EpisodeCard;
