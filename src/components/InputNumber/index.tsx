import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import chevron from "../../assets/images/chevronDownBlack.png";
import * as S from "./styled";

import { InputErrorMessage } from "../InputErrorMessage/styles";
import { cx } from "../../utils/cx";

interface InputNumberProps<T extends FieldValues>
  extends UseControllerProps<T> {
  wrapperClassName?: string;
  className?: string;
  label?: React.ReactNode;
  suffix?: string;
  error?: FieldError;
}

export const InputNumber = <T extends FieldValues>({
  control,
  name,
  className,
  wrapperClassName,
  label,
  error,
  suffix,
  ...props
}: InputNumberProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
            <S.InputNumberWrapper className={wrapperClassName}>
              {label && <S.Label>{label}</S.Label>}

              <S.InputContent>
                <S.Input
                  className={cx(className, error?.message && "error")}
                  type="number"
                  {...props}
                  {...field}
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
                      field.onChange(field.value + 1);
                    }}
                  />
                  <S.Arrow
                    src={chevron}
                    className="decrease"
                    alt="Menos"
                    onClick={() => {
                      field.onChange(field.value - 1);
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
      }}
    />
  );
};
