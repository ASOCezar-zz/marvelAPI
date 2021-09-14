import { createContext, Dispatch, SetStateAction } from 'react';

export type GlobalChars = {
  //eslint-disable-next-line
  characters: any[];
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
  timestamps: number;
  publicKey: string;
  md5: string;
};

export const CharsContext = createContext<GlobalChars>({
  characters: ['a', 'b'],
  limit: 20,
  setLimit: () => 0,
  timestamps: 1627160343,
  publicKey: 'bcc7616374e3d240e7270653f1b2b599',
  md5: '8238c0c73920dc83cfe09aec0b169d26',
});
