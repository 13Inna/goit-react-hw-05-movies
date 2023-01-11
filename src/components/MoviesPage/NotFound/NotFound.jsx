import { Text, Img } from './NotFound.styled';

import image from '../../../img/image 1.png';

export const NotFound = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
      <Img src={image} alt="" />
    </>
  );
};