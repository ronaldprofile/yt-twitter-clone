import styled, { css } from "styled-components";
import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Rocketseat
} from "../../styles/icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    max-height: 100vh;
    padding: 9px 19px 20px;
    position: sticky;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rocketseat)`
  margin-bottom: 20px;
  width: 41px;
  height: 41px;

  path {
    fill: var(--twitter);
  }
`;

export const MenuButton = styled.button`
  padding: 8.25px 0;
  display: flex;
  align-items: center;

  flex-shrink: 0;
  outline: 0;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    padding-right: 15px;

    > span {
      margin-left: 19px;
      display: inline;
      font-size: 19px;
      font-weight: bold;
    }
  }

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
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
      }
    }
  }
`;

const iconStyles = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconStyles}
`;
export const BellIcon = styled(Notifications)`
  ${iconStyles}
`;
export const EmailIcon = styled(Email)`
  ${iconStyles}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconStyles}
`;
export const ProfileIcon = styled(Person)`
  ${iconStyles}
`;

export const BottomSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
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
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitToAppIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    margin-left: 30px;
    width: 25px;
    height: 25px;

    color: var(--white);
    cursor: pointer;

    path {
      transition: color 0.2s;
    }

    &:hover {
      path {
        color: var(--like);
      }
    }
  }
`;
