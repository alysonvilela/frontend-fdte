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
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const { slots, add } = usePokedexStore((state) => ({
    slots: state.slots,
    add: state.add,
  }));

  const canAdd = slots.some((val) => !val);

  const { data, refetch, remove } = useGetPokemon({
    onSuccess: () => {
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

  console.log("status", status);
  return (
    <S.MapWrapper>
      <Sidebar />
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
          <PokemonDetail data={data} />
        </Modal.Content>
      </Modal.Root>
    </S.MapWrapper>
  );
};

export default MapPage;
