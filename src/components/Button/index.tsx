import { ComponentPropsWithoutRef } from "react";
import * as S from "./styled";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text?: string
  icon?: string
}

export const Button = ({ text, icon, onClick }: ButtonProps) => (
  <S.ButtonWrapper className={`${icon ? "icon" : ""}`} onClick={onClick}>
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

