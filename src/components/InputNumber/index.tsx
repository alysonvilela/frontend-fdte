import chevron from "assets/images/chevronDownBlack.png";

import * as S from "./styled";
import { ComponentPropsWithoutRef } from "react";

interface InputNumberProps extends ComponentPropsWithoutRef<"input"> {
  className?: string
  label?: string
  suffix?: string
}

export const InputNumber = ({ className, label, placeholder, name, suffix }: InputNumberProps) => (
  <S.InputNumberWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}

    <S.InputContent>
      <S.Input value="" type="number" placeholder={placeholder} name={name} />

      {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

      <S.InputActions>
        <S.Arrow src={chevron} className="increase" alt="Mais" />
        <S.Arrow src={chevron} className="decrease" alt="Menos" />
      </S.InputActions>
    </S.InputContent>
  </S.InputNumberWrapper>
);
