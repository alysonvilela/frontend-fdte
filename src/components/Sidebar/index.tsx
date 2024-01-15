import iconPlus from "../../assets/images/plus.png";

import * as S from "./styled";
import { Button } from "../Button";
import QuestionMark from "../../assets/icons/questionmark.svg";

export const Sidebar = () => (
  <S.SideBarWrapper>
    <S.SideBarList>
      <S.SideBarItem>
        <img
          src={QuestionMark}
          alt="Question Mark that indicates an empty slot for pokemons"
        />
      </S.SideBarItem>
    </S.SideBarList>

    <Button icon={iconPlus} />
  </S.SideBarWrapper>
);
