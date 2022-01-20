import styled, { css } from "styled-components";
import {
  Home,
  Hashtag,
  Notifications,
  Email,
  Bookmark,
  FavoriteBorder,
  Person,
  MoreCircle,
  MoreHorizontal
} from "../../styles/icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    max-height: 100vh;
    padding: 0 12px;
    position: sticky;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
  }
`;

export const Topside = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }

  button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;
      > span {
        display: inline;

        font-size: 17px;
        font-weight: 700;
        color: var(--button-color);
      }
    }
  }
`;

export const Nav = styled.nav``;

export const Logo = styled.div`
  margin-bottom: 20px;
  width: 52px;
  height: 52px;
  transition: background 0.2s;
  cursor: pointer;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const MenuButton = styled.a`
  padding: 8.25px 0;
  display: flex;
  align-items: center;

  flex-shrink: 0;
  outline: 0;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--twitter-menubar-hover);
  }

  &.active {
    span {
      font-weight: 700;
    }
  }

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    padding: 12px;

    > span {
      margin-left: 20px;
      margin-right: 16px;
      display: inline;

      font-size: 20px;
      line-height: 24px;
      font-weight: 400;

      color: var(--gray-d9);
    }
  }
`;

const iconStyles = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: var(--gray-d9);
`;

export const HomeIcon = styled(Home)`
  ${iconStyles}
`;

export const ExploreIcon = styled(Hashtag)`
  ${iconStyles}
`;

export const BellIcon = styled(Notifications)`
  ${iconStyles}
`;

export const EmailIcon = styled(Email)`
  ${iconStyles}
`;

export const BookmarkIcon = styled(Bookmark)`
  ${iconStyles}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconStyles}
`;

export const ProfileIcon = styled(Person)`
  ${iconStyles}
`;

export const MoreCircleIcon = styled(MoreCircle)`
  ${iconStyles}
`;

export const BottomSide = styled.div`
  margin: 12px 0;
  padding: 12px;
  display: flex;
  align-items: center;

  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: var(--twitter-menubar-hover);
  }
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  background: url("https://github.com/ronaldprofile.png");
  flex-shrink: 0;

  border-radius: 50%;
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-size: 15px;

    > span {
      color: var(--gray);
    }
  }
`;

export const MoreOptions = styled(MoreHorizontal)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    margin-left: 30px;
    width: 38px;
    height: 38px;

    color: var(--gray-d9);
    cursor: pointer;
  }
`;
