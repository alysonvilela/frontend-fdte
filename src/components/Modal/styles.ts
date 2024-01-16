import styled, { keyframes } from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalPortal = Dialog.Portal;

export const ModalOverlay = styled(Dialog.Overlay)`
  background-color: ${({ theme }) => theme.colors.modal.background};
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
