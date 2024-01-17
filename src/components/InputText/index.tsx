import { ComponentPropsWithoutRef, forwardRef } from "react";

import * as S from "./styled";

interface InputTextProps extends ComponentPropsWithoutRef<"input"> {
  wrapperClassName?: string;
  label?: string;
  suffix?: string;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      wrapperClassName,
      label,
      type,
      placeholder,
      name,
      ...props
    }: InputTextProps,
    ref
  ) => (
    <S.InputTextWrapper className={wrapperClassName}>
      {label && <S.Label>{label}</S.Label>}

      <S.Input
        type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
        {...props}
      />
    </S.InputTextWrapper>
  )
);
