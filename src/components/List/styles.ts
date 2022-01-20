import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--secondary);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  &:first-child {
    margin-top: 13px;
  }

  &:last-child {
    margin-bottom: 17px;
  }
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: var(--sidebar-item-hover);
  }
`;

export const Title = styled.span`
  padding: 12px 16px;
  font-size: 20px;
  font-weight: bold;
`;
