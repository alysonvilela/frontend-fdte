import { Pokemon } from "../../entities/pokemon";
import { Button } from "../Button";
import * as S from "./styles";

interface PokemonDetailProps {
  data?: Pokemon;
}

export const PokemonDetail = ({ data }: PokemonDetailProps) => {
  return (
    <S.Background>
      <S.Header>
        <Button title="x" />
      </S.Header>
      <S.PictureWrapper>
        <img
          src={data?.pic}
          alt={`${data?.name} found, this creature can be captured.`}
        />
      </S.PictureWrapper>
      <S.Content>ola</S.Content>
    </S.Background>
  );
};
