import styled, { css } from "styled-components";
import { Button } from "../Button";

import { Cake, LocationOn } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  scrollbar-width: none; // firefox
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  width: 100%;
  position: relative;
  flex-shrink: 0;
  height: min(33vw, 199px);
  background: var(--twitter);
`;

export const Avatar = styled.div`
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: circle();
  }
`;

export const ProfileData = styled.div`
  position: relative;
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 19px;
    font-weight: bold;
  }

  h2 {
    font-size: 15px;
    font-weight: normal;
    color: var(--gray);
  }

  p {
    margin-top: 11px;
    font-size: 15px;

    a {
      text-decoration: none;
      color: var(--twitter);
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  ul {
    margin: 10px 0;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: var(--gray);

      svg {
        margin-right: 5px;
        fill: var(--gray);
      }
    }
  }
`;

export const EditProfile = styled(Button)`
  padding: 4px 16px;

  position: absolute;
  top: 2vw;
  right: 7px;
  font-size: 13px;

  @media (min-width: 320px) {
    padding: 10px 19px;
    top: 10px;

    font-size: 15px;
  }
`;

const iconStyles = css`
  height: 20px;
  width: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconStyles}
`;
export const CakeIcon = styled(Cake)`
  ${iconStyles}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;
