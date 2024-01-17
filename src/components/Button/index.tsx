import { ComponentPropsWithoutRef, forwardRef } from "react";
import * as S from "./styled";
import { cx } from "../../utils/cx";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text?: string;
  icon?: string;
  hasShadow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, icon, hasShadow, onClick, ...props }: ButtonProps, ref) => (
    <S.ButtonWrapper
      className={cx(icon && "icon", hasShadow && "shadow", text)}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
    </S.ButtonWrapper>
  )
);
