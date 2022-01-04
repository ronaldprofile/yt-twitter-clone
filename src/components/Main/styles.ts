import styled, { css } from "styled-components";

import {
  ArrowLeft,
  Email,
  Home,
  Search,
  Notifications
} from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  padding: 8px 0 9px 13px;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;
  text-align: left;

  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  width: 100%;
  /* max irá usar uma porcentagem da largura da tela.
    Exemplo: se a tela estiver com uma largura de 320px ele pegará 32px que corresponde a 10vw
  */
  padding: 8px min(46px, max(10vw, 10px));
  bottom: 0;
  left: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--primary);
  border-top: 1px solid var(--outline);

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconStyles = css`
  width: 31px;
  height: 31px;

  fill: var(--gray);
  cursor: pointer;
  transition: fill 0.2s;
  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconStyles}
`;
export const SearchIcon = styled(Search)`
  ${iconStyles}
`;
export const BellIcon = styled(Notifications)`
  ${iconStyles}
`;
export const EmailIcon = styled(Email)`
  ${iconStyles}
`;
