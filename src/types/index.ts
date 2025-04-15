export type TimelineObj = {
  Id: number;
  Episode: string;
  Title: string;
  Media: number;
  Description: string;
  Image: string;
  Icon: string;
  Audio: string;
  RemoteId: string;
  Status: 1 | 0;
  isActive: 1 | 0;
  inId: string;
  CreateDate: string;
  MediaName: string;
  Category: string;
  Epoch: number;
  AudioSize: number;
};

export type Timeline = TimelineObj[];
