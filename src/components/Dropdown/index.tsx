import chevron from "assets/images/chevronDownBlack.png";

import * as S from "./styled";


interface DropdownProps {
label: string
options: {
  value?: string | number | readonly string[]
  text: string
}[]
}

export const Dropdown = ({ label, options }: DropdownProps) => (
  <S.DropdownWrapper>
    {label && <S.Label>{label}</S.Label>}

    <S.DropdownContent>
      <S.Select>
        <S.DropdownOption value="">Selecione o(s) tipo(s)</S.DropdownOption>
        {options &&
          options.map((option, index) => (
            <S.DropdownOption key={index} value={option.value}>
              {option.text}
            </S.DropdownOption>
          ))}
      </S.Select>
      <S.DropdownIcon src={chevron} alt="Chevron" />
    </S.DropdownContent>
  </S.DropdownWrapper>
);