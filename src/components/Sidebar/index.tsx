import iconPlus from "../../assets/images/plus.png";

import * as S from "./styled";
import { Button } from "../Button";
import QuestionMark from "../../assets/icons/questionmark.svg";
import { usePokedexStore } from "../../store/pokedex";

export const Sidebar = () => {
  const slots = usePokedexStore((state) => state.slots);

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {slots.map((i, idx) => {
          return (
            <S.SideBarItem key={`sioodebar-${idx}`}>
              {i === null ? (
                <img
                  src={QuestionMark}
                  alt="Question Mark that indicates an empty slot for pokemons"
                />
              ) : (
                <p>IMG</p>
              )}
            </S.SideBarItem>
          );
        })}
      </S.SideBarList>

      <Button icon={iconPlus} />
    </S.SideBarWrapper>
  );
};
