import React, { useCallback, useState } from "react";
import { Character, CharacterStatus } from "../../components/Character";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./styled";

const MapPage = () => {
  const [status, setStatus] = useState<CharacterStatus>("INITIAL");

  const onHover = useCallback(() => {
    if (status !== "LOADING") {
      setStatus("HOVER");
      setTimeout(() => {
        setStatus("LOADING");
      }, 500);
    }
  }, [status]);

  const onHoverOut = () => {
    {
      setTimeout(() => {
        setStatus("INITIAL");
      }, 500);
    }
  };

  return (
    <S.MapWrapper>
      <Sidebar />
      <Character
        status={status}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
      />
    </S.MapWrapper>
  );
};

export default MapPage;
