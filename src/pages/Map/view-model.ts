import { CharacterStatus } from "../../components/Character";
import { Pokemon } from "../../interfaces/pokemon";
import { useCallback, useRef, useState } from "react";
import { usePokedexStore } from "../../store/pokedex";
import { useGetPokemon } from "../../services/use-get-pokemon";

export const useMapViewModel = () => {
  const [status, setStatus] = useState<CharacterStatus>("INITIAL");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const { slots } = usePokedexStore((state) => ({
    slots: state.slots,
  }));

  const canAdd = slots.some((val) => !val);

  const { data, refetch, remove } = useGetPokemon({
    onSuccess: (data) => {
      setStatus("INITIAL");
      if (triggerRef.current) {
        triggerRef.current.click();
      }
      setSelectedPokemon(data);
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
      setTimeout(() => refetch(), 1000);
    }
  };

  const onHoverOut = useCallback(async () => {
    {
      if (status === "HOVER" || status === "ERROR") {
        setTimeout(() => setStatus("INITIAL"), 500);
      }
    }
  }, [status]);

  const onSelectPokemon = (pokemon: Pokemon) => {
    setStatus("INITIAL");
    if (triggerRef.current) {
      triggerRef.current.click();
    }
    setSelectedPokemon(pokemon);
  };

  const onCreatePokemon = () => {
    if (triggerRef.current) {
      triggerRef.current.click();
    }
    setSelectedPokemon(null);
  };

  const onCloseModal = () => {
    remove();
    setSelectedPokemon(null);
  };

  return {
    handlers: {
      onHover,
      onClick,
      onCloseModal,
      onSelectPokemon,
      onCreatePokemon,
      onHoverOut,
    },
    states: {
      selectedPokemon,
      data,
      status,
      canAdd,
      triggerRef,
    },
  };
};
