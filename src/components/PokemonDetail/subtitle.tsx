import * as S from "./styles";

interface SubtitleProps {
  text: string;
}

export const Subtitle = ({ text }: SubtitleProps) => (
  <S.SubtitleWrapper>
    <S.DividerHorizontal></S.DividerHorizontal>
    <S.Subtitle>{text}</S.Subtitle>
    <S.DividerHorizontal></S.DividerHorizontal>
  </S.SubtitleWrapper>
);
