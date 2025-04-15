type TrackCardProps = {
  iconPath: string;
  trackTitle: string;
  trackEpisode: string;
};

function TrackCard({ iconPath, trackTitle, trackEpisode }: TrackCardProps) {
  return (
    <div className="flex gap-x-3 mt-5">
      <img
        className="w-[50px] h-[50px] object-fill rounded-lg border-solid border-gray-700"
        src={`https://arthurfrost.qflo.co.za/${iconPath}`}
        alt="Episode Cover"
      />
      <div>
        <p>{trackTitle}</p>
        <p className="text-sm">Ep: {trackEpisode}</p>
      </div>
    </div>
  );
}

export default TrackCard;
