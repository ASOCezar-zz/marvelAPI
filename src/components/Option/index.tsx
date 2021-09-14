import { Div } from './styles';

export type OptionProps = {
  name: string;
  image: string;
  goto: string;
};

export const Option = ({ name, image, goto }: OptionProps) => {
  return (
    <a href={goto}>
      <Div>
        <img src={image} />
        <h1> {name} </h1>
      </Div>
    </a>
  );
};
