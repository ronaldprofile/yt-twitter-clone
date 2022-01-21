import styled, { css } from "styled-components";

type TabProps = {
  isActive?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.nav`
  margin-top: 16px;

  width: 100%;
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgb(41, 51, 54);
`;

export const Tab = styled.a<TabProps>`
  width: 100%;
  min-height: 56px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  text-decoration: none;

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--button-tweet-outlined-hover);
  }

  > span {
    position: relative;

    display: inline-block;
    padding: 16px 0;
    font-size: 15px;
    font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
    color: ${({ isActive }) =>
      isActive ? "var(--gray-d9)" : "var(--gray-7d)"};

    ${({ isActive }) =>
      isActive &&
      css`
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          width: 100%;
          background: var(--button-tweet);
        
      `}
  }
`;

export const Tweets = styled.ul`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
