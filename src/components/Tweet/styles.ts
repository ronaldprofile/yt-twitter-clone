import styled, { css } from "styled-components";

import { Favorite, Chat, Rocketseat } from "../../styles/icons";

export const Container = styled.div`
  max-width: 100%;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid var(--gray);
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;

export const Body = styled.div`
  margin-top: 3px;
  position: relative;
  display: flex;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  position: absolute;
  top: 0;
  left: 0;
  flex-shrink: 0;

  border-radius: 50%;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  strong {
    margin-right: 5px;
  }

  strong,
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span,
  time {
    color: var(--gray);
  }
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  margin: 0 10px;
  background: var(--gray);
`;

export const Description = styled.p`
  margin-top: 4px;
  font-size: 14px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: url("https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cm9ja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
  object-fit: cover;
  border-radius: 14px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  width: 100%;
  margin: 11px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: 330px) {
    width: 63%;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    color: var(--gray);
  }

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    span {
      color: var(--retweet);
    }
    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    span {
      color: var(--like);
    }
    > svg {
      fill: var(--like);
    }
  }
`;

const iconStyles = css`
  width: 19px;
  height: 19px;
`;

export const RocketseatIcon = styled(Rocketseat)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  path {
    fill: var(--gray);
  }
`;

export const CommentIcon = styled(Chat)`
  ${iconStyles}
`;
export const RetweetIcon = styled(Rocketseat)`
  ${iconStyles}
`;
export const LikeIcon = styled(Favorite)`
  ${iconStyles}
`;
