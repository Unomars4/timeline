import { RefObject } from "react";
import { TimelineObj } from "../../types";
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

type EpisodeCardProps = {
  item: TimelineObj;
  audioRef: RefObject<HTMLAudioElement | null>;
  selectedItemHandler: (obj: TimelineObj) => void;
  selectedId: number;
};

function EpisodeCard({
  item,
  selectedItemHandler,
  audioRef,
  selectedId,
}: EpisodeCardProps) {
  return (
    <TooltipProvider delayDuration={50} skipDelayDuration={50}>
      <Tooltip>
        <TooltipTrigger
          onClick={() => {
            selectedItemHandler(item);
            if (audioRef.current) {
              audioRef.current.src = `https://arthurfrost.qflo.co.za/${item.Audio}`;
            }
          }}
          asChild
        >
          <img
            key={item.Id}
            className={`cursor-pointer aspect-square w-[40px] h-[40px] object-fill rounded-lg border-solid ${item.Id === selectedId ? "border-red-900 border-[5px]" : ""}`}
            src={`https://arthurfrost.qflo.co.za/${item.Image}`}
            alt="Episode Cover"
          />
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            className="select-none rounded bg-white px-[15px] py-2.5 text-[15px] leading-none text-violet11  will-change-[transform,opacity]"
            sideOffset={5}
          >
            <p className="text-sm">{item.Title}</p>
            <p className="text-sm">{item.Description}</p>
            <p>{item.CreateDate}</p>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
}

export default EpisodeCard;
