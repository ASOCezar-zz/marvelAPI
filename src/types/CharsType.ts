export type CharsType = {
  thumbnail?: { path: string; extension: string };
  id?: number;
  name?: string;
  description?: string;
  comics?: {
    items?: [{ resourceURI: string }];
  };
};
