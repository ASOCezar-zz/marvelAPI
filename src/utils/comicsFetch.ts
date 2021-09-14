import { Dispatch, SetStateAction } from 'react';
import { CharsType } from '../types/CharsType';
// import { ComicsType } from '../types/ComicsType';

export type ComicsFetchProps = {
  timestamps: number;
  publicKey: string;
  md5: string;
  clickedChar?: CharsType;
  //eslint-disable-next-line
  setComics: Dispatch<SetStateAction<any[]>>;
  setIsLoadingComics: Dispatch<SetStateAction<boolean>>;
};

export const comicsFetch = ({
  timestamps,
  setIsLoadingComics,
  publicKey,
  md5,
  clickedChar,
  setComics,
}: ComicsFetchProps) => {
  setIsLoadingComics(true);
  if (clickedChar !== null && clickedChar !== undefined) {
    if (clickedChar.comics !== null && clickedChar.comics !== undefined) {
      if (clickedChar.comics.items !== null && clickedChar.comics.items !== undefined) {
        const numberComics = clickedChar.comics.items.length;
        clickedChar.comics?.items.forEach(async (item, index) => {
          const URI = item.resourceURI.replace('http', 'https');
          if (index <= 11) {
            await fetch(`${URI}?ts=${timestamps}&apikey=${publicKey}&hash=${md5}`)
              .then((res) => res.json())
              .then((res) => setComics((prevState) => [...prevState, res.data.results[0].thumbnail]))
              .then(() => {
                if (index + 1 === numberComics || index === 11) {
                  setIsLoadingComics(false);
                }
              });
          }
        });
      }
    }
  }
};

comicsFetch.defaultProps = {
  clickedChar: [],
};
