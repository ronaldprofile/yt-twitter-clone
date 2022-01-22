import styled, { css } from "styled-components";
import { Button } from "../Button";

type FollowButtonProps = {
  isFollowing?: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  margin-right: 10px;
  width: 49px;
  height: 49px;
  background: url("https://github.com/ronaldprofile.png");
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 15px;

  a {
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  > span {
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)<FollowButtonProps>`
  padding: 6px 17px;

  background: ${({ outlined }) =>
    outlined === false && "var(--button-tweet-outlined)"};

  &:hover {
    background: ${({ isFollowing }) =>
      isFollowing && "var(--button-unfollow-background)"};
    border: ${({ isFollowing }) =>
      isFollowing && "1px solid var(--button-unfollow-border-color)"};

    ${({ isFollowing }) =>
      isFollowing &&
      css`
        > span {
          display: none;
        }

        .unfollow-span {
          display: block;
        }
      `}
  }

  > span {
    color: ${({ outlined }) =>
      outlined === false && "var(--button-follow-color)"};
  }

  .unfollow-span {
    display: none;

    color: var(--button-unfollow-color);
  }
`;
