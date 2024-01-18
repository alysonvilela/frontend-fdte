import * as S from "./styles";

import AttackImage from "../../assets/images/sword.png";
import DefenseImage from "../../assets/images/shield.png";
import SpeedImage from "../../assets/images/speed.png";
import { Pokemon } from "../../interfaces/pokemon";

interface PokemonStatsProps {
  stats?: Pokemon["stats"];
}

interface StatsLabelProps {
  type: "defense" | "attack" | "speed";
  text: string;
  value?: string;
}

type IconsTypes = {
  [k in StatsLabelProps["type"]]: string;
};

export const StatsLabel = ({ type, text, value }: StatsLabelProps) => {
  const icons: IconsTypes = {
    defense: DefenseImage,
    attack: AttackImage,
    speed: SpeedImage,
  };

  return (
    <S.Wrapper>
      <S.Key>
        <img src={icons[type]} alt="" />
        <span>{text}</span>
      </S.Key>
      {value && <span>{value}</span>}
    </S.Wrapper>
  );
};

export const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <>
      {stats && (
        <S.Container>
          <StatsLabel type="defense" text="Defesa" value={String(stats.def)} />
          <StatsLabel type="attack" text="Ataque" value={String(stats.def)} />
          <StatsLabel
            type="defense"
            text="Defesa especial"
            value={String(stats.special_def)}
          />
          <StatsLabel
            type="attack"
            text="Ataque especial"
            value={String(stats.special_atk)}
          />
          <StatsLabel
            type="speed"
            text="Velocidade"
            value={String(stats.velocity)}
          />
        </S.Container>
      )}
    </>
  );
};
