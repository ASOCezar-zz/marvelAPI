import P from 'prop-types';

export const comicsFetch = ({ timestamps, setIsLoadingComics, publicKey, md5, clickedChar = [], setComics }) => {
  setIsLoadingComics(true);
  const numberComics = clickedChar.comics?.items.length;
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
};

comicsFetch.defaultProps = {
  clickedChar: [],
};

comicsFetch.propTypes = {
  timestamps: P.number.isRequired,
  publicKey: P.string.isRequired,
  md5: P.string.isRequired,
  clickedChar: P.array,
  setComics: P.func.isRequired,
  setIsLoadingComics: P.func.isRequired,
};
