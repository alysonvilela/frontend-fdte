import * as S from "./styles";

import AttackImage from "../../assets/images/sword.png";
import DefenseImage from "../../assets/images/shield.png";
import SpeedImage from "../../assets/images/speed.png";
import { Pokemon } from "../../entities/pokemon";

interface PokemonStatsProps {
  stats?: Pokemon["stats"];
}

export const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <>
      {stats && (
        <S.Container>
          <S.Wrapper>
            <S.Key>
              <img src={DefenseImage} alt="" />
              <span>Defesa</span>
            </S.Key>
            <span>{stats.def}</span>
          </S.Wrapper>
          <S.Wrapper>
            <S.Key>
              <img src={AttackImage} alt="" />
              <span>ataque</span>
            </S.Key>
            <span>{stats.atk}</span>
          </S.Wrapper>
          <S.Wrapper>
            <S.Key>
              <img src={DefenseImage} alt="" />
              <span>Defesa especial</span>
            </S.Key>
            <span>{stats.special_def}</span>
          </S.Wrapper>
          <S.Wrapper>
            <S.Key>
              <img src={AttackImage} alt="" />
              <span>Ataque especial</span>
            </S.Key>
            <span>{stats.atk}</span>
          </S.Wrapper>
          <S.Wrapper>
            <S.Key>
              <img src={SpeedImage} alt="" />
              <span>Velocidade</span>
            </S.Key>
            <span>{stats.velocity}</span>
          </S.Wrapper>
        </S.Container>
      )}
    </>
  );
};
