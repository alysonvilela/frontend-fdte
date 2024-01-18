import * as S from "./styles";

interface FormSubtitle {
  text: string;
}

export const FormSubtitle = ({ text }: FormSubtitle) => (
  <S.SubtitleWrapper>
    <S.DividerHorizontal></S.DividerHorizontal>
    <S.Subtitle>{text}</S.Subtitle>
    <S.DividerHorizontal></S.DividerHorizontal>
  </S.SubtitleWrapper>
);
