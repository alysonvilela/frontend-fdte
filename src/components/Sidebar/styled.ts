import styled, { css } from "styled-components";

interface SideBarItemProps {
  filled: boolean;
}

export const SideBarWrapper = styled.aside`
  background-color: transparent;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SideBarItem = styled.li<SideBarItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border: 4px solid #004a45;
  border-radius: 12.8rem;
  font-size: 4rem;
  font-weight: bold;
  color: #004a45;
  cursor: pointer;
  transition: all 0.2s;
  background-color: #00d68f;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ theme, filled }) =>
    filled &&
    css`
      background-color: ${theme.colors.neutral[100]};
      border-color: ${theme.colors.primary.default};

      img {
        height: 100%;
        padding: 6px;
      }

      &&:hover {
        background-color: ${({ theme }) => theme.colors.neutral[500]};
      }
    `}

  &:hover {
    background-color: #004a45;
    color: ${({ theme }) => theme.colors.primary.default}#00d68f;
  }

  &:not(last-of-type) {
    margin-bottom: 1.6rem;
  }
`;
