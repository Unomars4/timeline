import { Timeline } from "../types";

export async function getApiData() {
  const res: Response = await fetch(
    "https://arthurfrost.qflo.co.za/php/getTimeline.php",
    { cache: "force-cache" },
  );
  const timeline: Timeline = (await res.json())["Timeline"];
  return timeline;
}
