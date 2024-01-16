import React from "react";
import * as S from "./styles";
import { useModalStore } from "../../store/modal";
import { Button } from "../Button";

export const Modal = () => {
  const { isOpen, contentComponent, toggleModal } = useModalStore();

  const handleClose = () => {
    toggleModal(<></>);
  };
  return (
    <S.Backdrop
      isOpen={isOpen}
      onClick={() => {
        handleClose();
      }}
    >
      <S.ModalWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        `<Button onClick={() => handleClose()}>close</Button>`<p>aosdkoas</p>
      </S.ModalWrapper>
    </S.Backdrop>
  );
};
