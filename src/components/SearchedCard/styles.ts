import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 15px;
  border-color: black;
  border-style: solid;
  border-width: 2px;
  display: flex;
  flex-direction: row;
  margin: 15px;
  width: 95%;
  height: 158px;
  position: relative;
  align-content: center;
  padding: 2px;
`;

export const ImageDiv = styled.div`
  max-width: 220px;
  max-height: 140px;
  position: relative;
  inset-inline-start: 26px;
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
