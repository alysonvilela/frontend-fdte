import { FieldError } from "react-hook-form";
import chevron from "../../assets/images/chevronDownBlack.png";

import * as S from "./styled";
import React, {
  ComponentPropsWithoutRef,
  MutableRefObject,
  Ref,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { InputErrorMessage } from "../InputErrorMessage/styles";
import { cx } from "../../utils/cx";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  wrapperClassName?: string;
  placeholder: string;
  label?: React.ReactNode;
  options: {
    value: string;
    text: string;
  }[];
  error?: FieldError;
}

export const Select = forwardRef(
  (
    {
      className,
      wrapperClassName,
      placeholder,
      options,
      label,
      error,
      ...props
    }: SelectProps,
    ref: Ref<HTMLSelectElement>
  ) => {
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(selectRef.current);
        } else {
          (ref as MutableRefObject<HTMLSelectElement | null>).current =
            selectRef.current;
        }
      }
    }, [ref, selectRef]);

    return (
      <>
        <S.InputNumberWrapper className={wrapperClassName}>
          {label && <S.Label>{label}</S.Label>}

          <S.InputContent>
            <S.SelectInput
              className={cx(className, error?.message && "error")}
              {...props}
              defaultValue={""}
              ref={selectRef}
            >
              <option value="" disabled>
                {placeholder}
              </option>
              {options.map((i) => (
                <React.Fragment key={props.id + i.text}>
                  <option key={i.value} value={i.value}>
                    {i.text}
                  </option>
                </React.Fragment>
              ))}
            </S.SelectInput>

            <S.InputActions
              className={cx(className, error?.message && "error")}
            >
              <S.Arrow
                src={chevron}
                alt="Mais"
                onClick={() => {
                  selectRef.current?.click();
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
