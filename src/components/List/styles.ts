import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--secondary);
  border-radius: 14px;

  cursor: pointer;
`;

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    margin-top: 13px;
  }

  &:last-child {
    margin-bottom: 17px;
  }
`;

export const Title = styled.span`
  font-size: 19px;
  font-weight: bold;
`;