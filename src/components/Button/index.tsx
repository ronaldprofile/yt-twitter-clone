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

  background: ${({ outlined }) =>
    outlined ? "transparent" : "var(--button-tweet)"};
  color: ${({ outlined }) =>
    outlined ? "var(--button-tweet-outlined)" : "var(--gray-d9)"};
  border: ${({ outlined }) =>
    outlined ? "1px solid var(--button-outlined-border)" : "none"};
  cursor: pointer;
  transition: background 0.2s;
`;
