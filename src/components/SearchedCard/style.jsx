import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 15px;
  border-color: black;
  border-style: solid;
  border-width: 2px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  margin: 15px;
  width: 95%;
  height: 158px;
  position: relative;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  padding: 2px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
`;

export const ImageDiv = styled.div`
  max-width: 220px;
  max-height: 140px;
  position: relative;
  inset-inline-start: 26px;
  -webkit-inset-block-start: 5px;
  -ms-intb-rlock-start: 5px;
  inset-block-start: 5px;

  img {
    max-width: 130px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

export const NameDiv = styled.div`
  max-width: 180px;
  max-height: 50px;
  position: relative;
  -webkit-inset-block-start: 15px;
  -ms-intb-rlock-start: 15px;
  inset-block-start: 15px;
  inset-inline-start: 50px;
  font-size: 20px;
  font-weight: bold;
  word-break: break-word;
`;

export const DescriptionDiv = styled.div`
  width: 55%;
  max-height: 100%;
  position: relative;
  inset-inline-start: 52px;
  text-align: justify;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  word-wrap: break-word;
  margin-left: 100px;
`;
