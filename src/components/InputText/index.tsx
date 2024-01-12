import  { ComponentPropsWithoutRef } from "react";

import * as S from "./styled";

interface InputTextProps extends ComponentPropsWithoutRef<"input"> {
  label?: string
  suffix?: string
}


export const InputText = ({ className, label, type, placeholder, name }: InputTextProps) => (
  <S.InputTextWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}

    <S.Input type={type} placeholder={placeholder} name={name} />
  </S.InputTextWrapper>
);
