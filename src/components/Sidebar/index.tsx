import iconPlus from "assets/images/plus.png";

import * as S from "./styled";
import { Button } from "../Button";

export const Sidebar = () => (
  <S.SideBarWrapper>
    <S.SideBarList>
      <S.SideBarItem>?</S.SideBarItem>
    </S.SideBarList>

    <Button icon={iconPlus} />
  </S.SideBarWrapper>
);

