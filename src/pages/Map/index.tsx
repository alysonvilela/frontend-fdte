import React, { useCallback, useState } from "react";
import { Character, CharacterStatus } from "../../components/Character";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./styled";
import { usePokedexStore } from "../../store/pokedex";
import { useGetPokemon } from "../../services/use-get-pokemon";
import { pokemonApiAdapter } from "../../services/adapters/pokemon-adapter";
import { useModalStore } from "../../store/modal";

const MapPage = () => {
  const [status, setStatus] = useState<CharacterStatus>("INITIAL");
  const { slots, add } = usePokedexStore((state) => ({
    slots: state.slots,
    add: state.add,
  }));
  const { toggleModal } = useModalStore();

  const canAdd = slots.some((val) => !val);

  const { data, refetch, remove } = useGetPokemon({
    onSuccess: (res) => {
      setStatus("INITIAL");
      const pokemon = pokemonApiAdapter(res);
      add(pokemon);
    },
  });

  const onHover = useCallback(() => {
    if (status !== "LOADING") {
      setStatus("HOVER");
    }
  }, [status]);

  const onClick = () => {
    if (canAdd && status !== "LOADING") {
      remove();
      setTimeout(() => setStatus("LOADING"), 500);
      // setTimeout(() => refetch(), 1000);
      toggleModal();
    }
  };

  const onHoverOut = useCallback(async () => {
    {
      if (status === "HOVER" || status === "ERROR") {
        setTimeout(() => setStatus("INITIAL"), 500);
      }
    }
  }, [status]);

  console.log("status", status);
  return (
    <S.MapWrapper>
      <Sidebar />
      <Character
        status={!canAdd ? "ERROR" : status}
        onMouseEnter={() => onHover()}
        onClick={() => onClick()}
        onMouseLeave={() => onHoverOut()}
      />
    </S.MapWrapper>
  );
};

export default MapPage;
