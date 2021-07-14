import React from 'react';
import { Text, TextProps } from './styles';

type TextComponentProps = TextProps & {
  text: string;
};

const TextComponent = ({
  fontWeight,
  size,
  text,
  align,
  color,
  marginTop,
  marginBottom,
}: TextComponentProps) => {
  return (
    <Text
      fontWeight={fontWeight}
      size={size}
      color={color}
      align={align}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
