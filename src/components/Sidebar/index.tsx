import iconPlus from "../../assets/images/plus.png";

import * as S from "./styled";
import { Button } from "../Button";
import QuestionMark from "../../assets/icons/questionmark.svg";
import { usePokedexStore } from "../../store/pokedex";
import { Pokemon } from "../../entities/pokemon";
interface SidebarProps {
  onSelectPokemon: (pokemon: Pokemon) => void;
  onCreate: () => void;
}

export const Sidebar = ({ onSelectPokemon, onCreate }: SidebarProps) => {
  const slots = usePokedexStore((state) => state.slots);
  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {slots.map((i, idx) => {
          return (
            <S.SideBarItem
              key={`sidebar-${idx}`}
              filled={!!i}
              onClick={() => {
                if (i) {
                  onSelectPokemon(i!);
                }
                onCreate();
              }}
            >
              {i?.app_id ? (
                <img src={i.pic} alt={`Picture of the pokemon ${i.name}`} />
              ) : (
                <img
                  src={QuestionMark}
                  alt="Question Mark that indicates an empty slot for pokemons"
                />
              )}
            </S.SideBarItem>
          );
        })}
      </S.SideBarList>

      <Button icon={iconPlus} onClick={onCreate} />
    </S.SideBarWrapper>
  );
};
