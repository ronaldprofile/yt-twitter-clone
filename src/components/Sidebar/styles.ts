import styled from "styled-components";

import { Search } from "../../styles/icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    width: min(399px, 100%);
    display: flex;
    flex-direction: column;
  }
`;

export const SearchWrapper = styled.div`
  width: min(399px, 100%);
  max-height: 57px;
  padding: 10px 24px;

  position: fixed;
  top: 0;
  z-index: 2;

  background: var(--primary);
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  padding: 0 10px 0 50px;
  background: var(--search);

  font-size: 14px;

  border: 1px solid var(--search);
  outline: 0;
  border-radius: 19.5px;
  transition: all 0.2s;
  &::placeholder {
    color: var(--gray);
  }

  &:focus {
    border-color: var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 16px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;
export const Body = styled.div`
  padding: 57px 24px 200px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;

  > div + div {
    margin-top: 15px;
  }
`;
