import { ReactNode } from "react";
import * as S from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  isOpen?: true | undefined;
  children: ReactNode;
}

export const ModalContent = ({ isOpen, children }: ModalProps) => {
  return (
    <Dialog.Portal forceMount={isOpen}>
      <S.ModalOverlay />
      <S.ModalContent>{children}</S.ModalContent>
    </Dialog.Portal>
  );
};
