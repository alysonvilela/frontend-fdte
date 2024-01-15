import { ComponentPropsWithoutRef } from "react";
import * as S from "./styled";
import { cx } from "../../utils/cx";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text?: string;
  icon?: string;
  hasShadow?: boolean;
}

export const Button = ({ text, icon, hasShadow, onClick }: ButtonProps) => (
  <S.ButtonWrapper
    className={cx(icon && "icon", hasShadow && "shadow", text)}
    onClick={onClick}
  >
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);
