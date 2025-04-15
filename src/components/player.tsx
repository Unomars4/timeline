import { Ref } from "react";

type AudioPlayerProps = {
  ref: Ref<HTMLAudioElement | null>;
  audioPath: string;
};

function AudioPlayer({ ref, audioPath }: AudioPlayerProps) {
  return (
    <audio controls controlsList="nodownload noplaybackspeed" ref={ref}>
      <source src={`https://arthurfrost.qflo.co.za/${audioPath}`} />
    </audio>
  );
}

export default AudioPlayer;
