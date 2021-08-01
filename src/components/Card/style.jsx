import styled, { keyframes } from 'styled-components';

const showDescription = keyframes`
  from {
    margin-top: 0%;
    height: 0;
  }
  to {
    margin-top: -190px;
    height: 200px;
  }
`;

export const Div = styled.div`
background-color: white;
background-position: top center;
background-size: cover;
position: relative;
cursor: pointer;

border-radius: 15px;

.nameDescriptionWrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  border-radius: 0 0 20px 20px;
  background-color: white;

  .description {
  display: none;
  text-align: justify;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  }
}

.image {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: center;
  transition: transform 0.3s linear;
}

@media (min-width: 1025px) {
  height: 100%;
  width: 100%;
  .image {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .title {
    position: relative;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 8px;
  }
}
@media (max-width: 1024px) {
  height: 100%;
  width: 100%;
  .image {
    height: 300px;
    animation: transform 1s linear;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .title {
    position: relative;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 8px;
  }
  @media(min-width: 769px) {
    &:hover {
      .image {
        transform: scale(0.95);
        position: relative;
      }
      .nameDescriptionWrapper {
        animation: ${showDescription} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.9);
      }
      .title {
        position: relative;
      }
      .description {
        display: flex;
      }
    }
  }
}
@media (max-width: 768px) {
  max-height: 200px;
  height: 100%;
  width: 90%;
  .image {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .nameDescriptionWrapper {
    bottom: 15px;
  }
  .title {
    position: relative;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 8px;
  }

@media (max-width: 425px) {
  max-height: 250px;
  height: 100%;
  max-width: 100%;

  .image {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-items: center;
    max-height: 170px;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .title {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 8px;
    width: 100%;
  }
}
`;
