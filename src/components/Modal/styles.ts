import styled, { css } from "styled-components";

interface PageWrapperProps {
  isOpen: boolean;
}

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  width: 100%;
  border-radius: 8px;
  border-end-end-radius: 0px;
  border-end-start-radius: 0px;

  @media (min-width: 576px) {
    max-width: 360px;
    max-height: 559px;
    bottom: 50%;
    border-radius: 8px;
  }
`;

export const Backdrop = styled.div<PageWrapperProps>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.modal.background};
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;

  ${({ isOpen }) => css`
    display: ${isOpen ? "flex" : "none"};
  `}
`;
