import { ComponentPropsWithoutRef, forwardRef } from "react";

import * as S from "./styled";
import { FieldError } from "react-hook-form";
import { cx } from "../../utils/cx";
import { InputErrorMessage } from "../InputErrorMessage/styles";

interface InputTextProps extends ComponentPropsWithoutRef<"input"> {
  wrapperClassName?: string;
  label?: string;
  suffix?: string;
  error?: FieldError;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      className,
      wrapperClassName,
      label,
      type,
      placeholder,
      name,
      error,
      ...props
    }: InputTextProps,
    ref
  ) => (
    <>
      <S.InputTextWrapper className={cx(wrapperClassName)}>
        {label && <S.Label>{label}</S.Label>}

        <S.Input
          className={cx(className, error?.message && "error")}
          type={type}
          placeholder={placeholder}
          name={name}
          ref={ref}
          {...props}
        />
      </S.InputTextWrapper>
      {error?.message && <InputErrorMessage>{error.message}</InputErrorMessage>}
    </>
  )
);
