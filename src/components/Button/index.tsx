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

  background: ${props => (props.outlined ? "transparent" : "var(--twitter)")};
  color: ${props => (props.outlined ? "var(--twitter)" : "var(--white)")};
  border: ${props => (props.outlined ? "1px solid var(--twitter)" : "none")};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${props =>
      props.outlined
        ? "var(--twitter-dark-hover)"
        : "var(--twitter-light-hover)"};
  }
`;
