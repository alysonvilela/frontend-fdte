import React, { useCallback, useState } from "react";
import { Character, CharacterStatus } from "../../components/Character";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./styled";
import { usePokedexStore } from "../../store/pokedex";
import { useQuery, useQueryClient } from "react-query";
import {
  GET_POKEMON_QUERY_KEY,
  useGetPokemon,
} from "../../services/use-get-pokemon";
import { makePokemon } from "../../utils/make-pokemon";
import { unSlug } from "../../utils/unslug";
import { pokemonApiAdapter } from "../../services/adapters/pokemon-adapter";

const MapPage = () => {
  const queryClient = useQueryClient();
  const [status, setStatus] = useState<CharacterStatus>("INITIAL");
  const { slots, add } = usePokedexStore((state) => ({
    slots: state.slots,
    add: state.add,
  }));

  const hasEmptySlot = slots.findIndex((val) => val === null) > -1;

  const { data, refetch, remove } = useGetPokemon({
    onSuccess: (res) => {
      const pokemon = pokemonApiAdapter(res);
      add(pokemon);
    },
  });

  const onHover = useCallback(() => {
    if (hasEmptySlot && status !== "LOADING") {
      remove();
      setStatus("HOVER");
      setTimeout(() => {
        setStatus("LOADING");
        setTimeout(() => {
          refetch();
        }, 1000);
      }, 500);
    } else if (!hasEmptySlot) {
      setStatus("ERROR");
    }
  }, [hasEmptySlot, refetch, remove, status]);

  const onHoverOut = useCallback(() => {
    {
      if (status !== "INITIAL") {
        setTimeout(() => {
          queryClient.cancelQueries({ queryKey: [GET_POKEMON_QUERY_KEY] });
          setStatus("INITIAL");
        }, 500);
      }
    }
  }, [queryClient, status]);

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
