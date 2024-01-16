import { useCallback, useRef, useState } from "react";
import { Character, CharacterStatus } from "../../components/Character";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./styled";
import { usePokedexStore } from "../../store/pokedex";
import { useGetPokemon } from "../../services/use-get-pokemon";
import { Modal } from "../../components/Modal";
import { PokemonDetail } from "../../components/PokemonDetail";
import { Pokemon } from "../../entities/pokemon";

const MapPage = () => {
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

  const onCloseModal = () => {
    remove();
    setSelectedPokemon(null);
  };

  return (
    <S.MapWrapper>
      <Sidebar onSelectPokemon={onSelectPokemon} />
      <Modal.Root>
        <Character
          status={!canAdd ? "ERROR" : status}
          onMouseEnter={() => onHover()}
          onClick={() => onClick()}
          onMouseLeave={() => onHoverOut()}
        />
        <Modal.Trigger
          ref={triggerRef}
          style={{
            display: "none",
          }}
        />
        <Modal.Content>
          <PokemonDetail
            data={selectedPokemon ?? data}
            onClose={onCloseModal}
          />
        </Modal.Content>
      </Modal.Root>
    </S.MapWrapper>
  );
};

export default MapPage;
