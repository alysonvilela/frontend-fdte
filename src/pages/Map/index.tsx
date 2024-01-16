import React, { useCallback, useState } from "react";
import { Character, CharacterStatus } from "../../components/Character";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./styled";
import { usePokedexStore } from "../../store/pokedex";

const MapPage = () => {
  const [status, setStatus] = useState<CharacterStatus>("INITIAL");
  const slots = usePokedexStore((state) => state.slots);

  const hasEmptySlot = slots.findIndex((val) => val === null) > -1;

  console.log({ slots, hasEmptySlot });

  const onHover = useCallback(() => {
    if (hasEmptySlot) {
      if (status !== "LOADING") {
        setStatus("HOVER");
        setTimeout(() => {
          setStatus("LOADING");
        }, 500);
      }
    } else {
      setStatus("ERROR");
    }
  }, [hasEmptySlot, status]);

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
