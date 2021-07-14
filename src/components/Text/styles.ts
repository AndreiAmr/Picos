import styled from 'styled-components';

export interface TextProps {
  size: number;
  fontWeight: 600 | 500 | 400;
  color: string;
  align: 'center' | 'left' | 'right';
  marginTop?: number;
  marginBottom?: number;
}

const Text = styled.p<TextProps>`
  font-family: 'Rajdhani', sans-serif;
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

export { Text };
