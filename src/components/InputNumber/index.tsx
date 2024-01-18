import { FieldError } from "react-hook-form";
import chevron from "../../assets/images/chevronDownBlack.png";

import * as S from "./styled";
import {
  ComponentPropsWithoutRef,
  MutableRefObject,
  Ref,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { InputErrorMessage } from "../InputErrorMessage/styles";
import { cx } from "../../utils/cx";

interface InputNumberProps extends ComponentPropsWithoutRef<"input"> {
  wrapperClassName?: string;
  label?: React.ReactNode;
  suffix?: string;
  error?: FieldError;
}

export const InputNumber = forwardRef(
  (
    {
      className,
      wrapperClassName,
      label,
      error,
      suffix,
      ...props
    }: InputNumberProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(inputRef.current);
        } else {
          (ref as MutableRefObject<HTMLInputElement | null>).current =
            inputRef.current;
        }
      }
    }, [ref]);

    return (
      <>
        <S.InputNumberWrapper className={wrapperClassName}>
          {label && <S.Label>{label}</S.Label>}

          <S.InputContent>
            <S.Input
              className={cx(className, error?.message && "error")}
              type="number"
              {...props}
              ref={inputRef}
            />

            {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

            <S.InputActions
              className={cx(className, error?.message && "error")}
            >
              <S.Arrow
                src={chevron}
                className="increase"
                alt="Mais"
                onClick={() => {
                  inputRef.current?.stepUp();
                }}
              />
              <S.Arrow
                src={chevron}
                className="decrease"
                alt="Menos"
                onClick={() => {
                  inputRef.current?.stepDown();
                }}
              />
            </S.InputActions>
          </S.InputContent>
        </S.InputNumberWrapper>
        {error?.message && (
          <InputErrorMessage>{error.message}</InputErrorMessage>
        )}
      </>
    );
  }
);
