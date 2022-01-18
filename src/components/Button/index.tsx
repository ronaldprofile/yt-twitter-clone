import styled from "styled-components";

type ButtonProps = {
  outlined?: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: 16px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 25px;
  border: 0;

  background: ${props =>
    props.outlined ? "transparent" : "var(--button-tweet)"};
  color: ${props =>
    props.outlined ? "var(--button-tweet-outlined)" : "var(--white)"};
  border: ${props =>
    props.outlined ? "1px solid var(--button-outlined-border)" : "none"};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${props =>
      props.outlined
        ? "var(--button-tweet-outlined-hover)"
        : "var(--button-tweet-hover)"};
  }
`;
