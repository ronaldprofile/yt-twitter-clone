import styled, { css } from "styled-components";
import { Button } from "../Button";

import { Cake, LocationOn } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  width: 100%;
  position: relative;
  flex-shrink: 0;
  height: min(33vw, 199px);
  background: var(--outline);
`;

export const Avatar = styled.div`
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: circle();
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ProfileData = styled.div`
  position: relative;
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  strong {
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-d9);
  }

  span {
    font-size: 15px;
    font-weight: normal;
    color: var(--gray-7d);
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
      color: var(--gray-7d);

      svg {
        margin-right: 5px;
        fill: var(--gray-7d);
      }
    }
  }
`;

export const EditProfile = styled(Button)`
  padding: 4px 16px;

  position: absolute;
  top: 2vw;
  right: 7px;
  font-size: 15px;
  font-weight: 700;

  &:hover {
    background: var(--button-tweet-outlined-hover);
  }

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
  align-items: center;
  gap: 16px;

  a,
  strong {
    font-size: 15px;
  }

  > a {
    font-weight: 700;
    text-decoration: none;
    color: var(--gray-d9);

    strong {
      color: var(--gray-7d);
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
