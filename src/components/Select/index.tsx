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
      name,
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
    }, [ref]);

    return (
      <>
        <S.InputNumberWrapper className={wrapperClassName}>
          {label && <S.Label>{label}</S.Label>}

          <S.InputContent>
            <S.SelectInput
              className={cx(className, error?.message && "error")}
              {...props}
              ref={selectRef}
            >
              <option value="">{placeholder}</option>
              {options.map((i) => (
                <option key={`${name}-i.value`} value={i.value}>
                  {i.text}
                </option>
              ))}
            </S.SelectInput>

            <S.InputActions
              className={cx(className, error?.message && "error")}
            >
              <S.Arrow
                src={chevron}
                className="increase"
                alt="Mais"
                onClick={() => {
                  // selectRef.current?
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
